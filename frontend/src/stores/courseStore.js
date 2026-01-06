import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import { useAuthStore } from './authStore'
import apiClient, { courseRequests } from '../utils/requests'
export const useCourseStore = defineStore('course', () => {
  // State
  const authStore = useAuthStore()
  const userId = computed(() => authStore.user?.id || null)
  const courses = ref([])
  const userCourses = ref([])
  const enrollments = ref([])
  const currentCourse = ref(null)
  const currentEnrollment = ref(null)
  // In courseStore.js
  const dashboardStats = ref({
    total_courses: 0,
    completed_courses: 0,
    in_progress_courses: 0,
    total_time_spent_seconds: 0,
    total_time_spent_hours: 0,
    recent_progress: [],
    courses_in_progress: []
  })
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const enrolledCourses = computed(() => {
    return courses.value.filter(course => 
      enrollments.value.some(enrollment => enrollment.course.id === course.id)
    )
  })

  const createdCourses = computed(() => {
    return courses.value.filter(course => course.creator?.id === userId)
  })

  const progressPercentage = computed(() => {
    if (!currentEnrollment.value || !currentCourse.value) return 0
    return Math.min(100, (currentEnrollment.value.current_page / currentCourse.value.total_pages) * 100)
  })

  // Actions
  async function fetchAllCourses() {
    try {
      isLoading.value = true
      const token = localStorage.getItem('access_token')
      
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      courses.value = response.data
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data?.detail || 'Failed to fetch courses'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  async function fetchUserEnrollments() {
    try {
      isLoading.value = true
      const token = localStorage.getItem('access_token')
      
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/enrollments/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      enrollments.value = response.data
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data?.detail || 'Failed to fetch enrollments'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  async function createCourse(courseData) {
    try {
      isLoading.value = true
      const token = localStorage.getItem('access_token')
      
      const formData = new FormData()
      formData.append('title', courseData.title)
      formData.append('description', courseData.description)
      formData.append('course_file', courseData.course_file)
      formData.append('is_public', courseData.is_public || false)
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/courses/`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      
      courses.value.push(response.data)
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data || 'Failed to create course'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // async function enrollInCourse(courseId) {
  //   try {
     
  //     const token = localStorage.getItem('access_token')
      
  //     const response = await axios.post(
  //       `${import.meta.env.VITE_API_URL}/api/courses/${courseId}/enroll/`,
  //       {},
  //       {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       }
  //     )
      
  //     enrollments.value.push(response.data)
  //     return { success: true, data: response.data }
  //   } catch (err) {
  //     error.value = err.response?.data?.detail || 'Failed to enroll in course'
  //     return { success: false, error: error.value }
  //   }
  // }

  async function enrollInCourse(courseSlug) {
    try {
      enrollments.value = []
      const response = await courseRequests.enrollInCourse(courseSlug)
      
      enrollments.value.push(response.data)
      currentEnrollment.value = response.data
      return { success: true, data: response.data }
    } catch (err) {
      console.error('Enroll error:', err.response?.data || err.message)
      error.value = err.response?.data?.detail || 'Failed to enroll in course'
      return { success: false, error: error.value }
    }
  }

  async function updateProgress(enrollmentId, pageNumber, timeSpent = 0,enrollmentslug) {
    try {
      const token = localStorage.getItem('access_token')
      
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enrollments/${enrollmentId}/update-progress/`,
        {
          page_number: pageNumber,
          time_spent: timeSpent,
          action: 'page_view'
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      
      // Update local enrollment data
      const index = enrollments.value.findIndex(e => e.id === enrollmentId)
      if (index !== -1) {
        enrollments.value[index] = response.data
      }
      
      if (currentEnrollment.value?.id === enrollmentId) {
        currentEnrollment.value = response.data
      }
      
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data || 'Failed to update progress'
      return { success: false, error: error.value }
    }
  }

  async function fetchDashboardStats() {
    try {
      isLoading.value = true
      const token = localStorage.getItem('access_token')
      
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard/stats/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      dashboardStats.value = response.data
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data?.detail || 'Failed to fetch dashboard stats'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  async function fetchCourseDetails(courseSlug) {
    try {
      isLoading.value = true
      const token = localStorage.getItem('access_token')
      
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/${courseSlug}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      currentCourse.value = response.data
      
      // Find user's enrollment for this course
      const enrollment = enrollments.value.find(e => e.course.id === response.data.id)
      currentEnrollment.value = enrollment || null
      
      return { success: true, data: response.data, enrollment }
    } catch (err) {
      error.value = err.response?.data?.detail || 'Failed to fetch course details'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  function setCurrentCourse(course) {
    currentCourse.value = course
    const enrollment = enrollments.value.find(e => e.course.id === course.id)
    currentEnrollment.value = enrollment || null
  }

  function clearCurrentCourse() {
    currentCourse.value = null
    currentEnrollment.value = null
  }

  // In courseStore.js - Add these actions

  async function addNote(enrollmentId, pageNumber, note) {
    try {
      const token = localStorage.getItem('access_token')
      
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enrollments/${enrollmentId}/add-note/`,
        {
          page_number: pageNumber,
          note: note
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      
      // Update local enrollment data
      const index = enrollments.value.findIndex(e => e.id === enrollmentId)
      if (index !== -1) {
        enrollments.value[index] = response.data
      }
      
      if (currentEnrollment.value?.id === enrollmentId) {
        currentEnrollment.value = response.data
      }
      
      return { success: true, data: response.data }
    } catch (err) {
      error.value = err.response?.data || 'Failed to add note'
      return { success: false, error: error.value }
    }
  }

  async function fetchNotes(enrollmentId) {
    try {
      const token = localStorage.getItem('access_token')
      
      // Note: The enrollment endpoint already returns notes in the serializer
      // If you need a separate endpoint, you'll need to create it in Django
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/enrollments/${enrollmentId}/`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      
      return { success: true, data: response.data.notes }
    } catch (err) {
      error.value = err.response?.data?.detail || 'Failed to fetch notes'
      return { success: false, error: error.value }
    }
  }

 


  return {
    // State
    courses,
    enrollments,
    currentCourse,
    currentEnrollment,
    dashboardStats,
    isLoading,
    error,
    
    // Getters
    enrolledCourses,
    createdCourses,
    progressPercentage,
    
    // Actions
    fetchAllCourses,
    fetchUserEnrollments,
    createCourse,
    enrollInCourse,
    updateProgress,
    fetchDashboardStats,
    fetchCourseDetails,
    setCurrentCourse,
    clearCurrentCourse,
    addNote,
    fetchNotes
  }
})