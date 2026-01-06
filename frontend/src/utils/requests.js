import axios from 'axios'

// Create axios instance with base config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Create a separate axios instance for auth requests to avoid infinite loops
const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    
    console.log('Interceptor caught error:', {
      status: error.response?.status,
      url: originalRequest.url,
      hasRetryFlag: originalRequest._retry,
      hasToken: !!localStorage.getItem('access_token')
    })
    
    // If error is 401 and we haven't tried refreshing yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log('Attempting token refresh...')
      
      originalRequest._retry = true
      
      try {
        const refreshToken = localStorage.getItem('refresh_token')
        console.log('Refresh token exists:', !!refreshToken)
        
        if (!refreshToken) {
          throw new Error('No refresh token found')
        }
        
        // Make refresh request without interceptors
        const response = await axios({
          method: 'POST',
          url: `${import.meta.env.VITE_API_URL}/auth/jwt/refresh/`,
          data: { refresh: refreshToken },
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        console.log('Refresh response:', response.data)
        
        if (response.data.access) {
          localStorage.setItem('access_token', response.data.access)
          console.log('New token stored')
          
          // Update the authorization header
          originalRequest.headers.Authorization = `Bearer ${response.data.access}`
          
          // Retry original request
          console.log('Retrying original request...')
          return apiClient(originalRequest)
        }
      } catch (refreshError) {
        console.error('Token refresh failed completely:', refreshError)
        console.error('Refresh error response:', refreshError.response?.data)
        
        // Clear tokens
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        
        // Only redirect if not already on login page
        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login?session=expired'
        }
        
        return Promise.reject(refreshError)
      }
    }
    
    return Promise.reject(error)
  }
)



// Auth requests
export const authRequests = {
  login: (credentials) => apiClient.post('/auth/jwt/create/', credentials),
  signup: (userData) => apiClient.post('/auth/users/', userData),
  refreshToken: () => {
    const refreshToken = localStorage.getItem('refresh_token')
    return apiClient.post('/auth/jwt/refresh/', { refresh: refreshToken })
  },
  getUserProfile: () => apiClient.get('/auth/users/me/')
}

// Course requests
export const courseRequests = {
  // Courses
  getAllCourses: () => apiClient.get('/api/courses/'),
  getCourse: (slug) => apiClient.get(`/api/courses/${slug}/`),
  createCourse: (courseData) => {
    const formData = new FormData()
    Object.keys(courseData).forEach(key => {
      formData.append(key, courseData[key])
    })
    return apiClient.post('/api/courses/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  updateCourse: (slug, courseData) => apiClient.patch(`/api/courses/${slug}/`, courseData),
  deleteCourse: (slug) => apiClient.delete(`/api/courses/${slug}/`),
  
  // Enrollment
  enrollInCourse: (slug) => apiClient.post(`/api/courses/${slug}/enroll/`),
  getUserEnrollments: () => apiClient.get('/api/enrollments/'),
  getCourseProgress: (slug) => apiClient.get(`/api/courses/${slug}/progress/`),
  updateProgress: (enrollmentId, data) => 
    apiClient.post(`/api/enrollments/${enrollmentId}/update-progress/`, data),
  
  // Dashboard
  getDashboardStats: () => apiClient.get('/api/dashboard/stats/'),
  
  // Lessons
  getLessons: (courseSlug) => apiClient.get('/api/lessons/', { params: { course: courseSlug } }),
  getLesson: (id) => apiClient.get(`/api/lessons/${id}/`),
  
  // Ratings
  getCourseRatings: (courseSlug) => 
    apiClient.get('/api/ratings/', { params: { course: courseSlug } }),
  createRating: (data) => apiClient.post('/api/ratings/', data)
}

export default apiClient