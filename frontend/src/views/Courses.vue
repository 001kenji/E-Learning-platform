<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="relative mb-12 overflow-hidden rounded-2xl">
        <!-- Gradient background with shine effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
            <div class="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full"></div>
          </div>
        </div>
        
        <!-- Shimmer overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                    -translate-x-full animate-shimmer"></div>
        
        <div class="relative p-8 md:p-12">
          <div class="max-w-3xl mx-auto text-center">
            <div class="inline-flex items-center space-x-2 mb-4">
              <div class="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span class="text-sm font-semibold text-primary uppercase tracking-wider">Learning Universe</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              Explore Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learning</span> Universe
            </h1>
            
            <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Discover courses that match your interests and advance your skills. 
              Track your progress and earn certificates as you learn.
            </p>
            
            <!-- Search Bar -->
            <div class="relative max-w-xl mx-auto">
              <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl rounded-2xl"></div>
              <div class="relative flex items-center bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl px-4 py-3 shadow-lg shadow-slate-200/50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" 
                       placeholder="Search for courses, topics, or instructors..." 
                       class="flex-1 bg-transparent border-none outline-none px-3 py-2 text-slate-700 placeholder-slate-400"
                       v-model="searchQuery">
                <button class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                              text-white border-0 px-6 py-2 rounded-xl font-medium transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter & Actions Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <!-- Filter Controls -->
        <div class="flex flex-wrap items-center gap-3">
          <!-- Filter Dropdown -->
          <div class="relative group">
            <button class="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm 
                          border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                          text-slate-700 hover:text-slate-800 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span class="font-medium">Filter</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 mt-2 w-56 bg-slate-400/95 backdrop-blur-sm border border-slate-300/50 
                        rounded-xl shadow-lg shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 
                        group-hover:visible transition-all duration-200 z-10">
              <div class="py-2">
                <button v-for="option in filterOptions" :key="option.value"
                        @click="setFilter(option.value)"
                        class="w-full px-4 py-2.5 text-left hover:bg-slate-50 hover:text-black transition-colors duration-150
                               flex items-center justify-between"
                        :class="{ 'text-primary bg-primary/5': filter === option.value }">
                  <span class="font-medium">{{ option.label }}</span>
                  <svg v-if="filter === option.value" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Sort Dropdown -->
          <div class="relative group">
            <button class="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm 
                          border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                          text-slate-700 hover:text-slate-800 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span class="font-medium">Sort</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute top-full left-0 mt-2 w-56 bg-slate-400/95 backdrop-blur-sm border border-slate-300/50 
                        rounded-xl shadow-lg shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 
                        group-hover:visible transition-all duration-200 z-10">
              <div class="py-2">
                <button v-for="option in sortOptions" :key="option.value"
                        @click="setSort(option.value)"
                        class="w-full px-4 py-2.5 text-left hover:bg-slate-50 hover:text-black transition-colors duration-150
                               flex items-center justify-between"
                        :class="{ 'text-primary bg-primary/5': sort === option.value }">
                  <span class="font-medium">{{ option.label }}</span>
                  <svg v-if="sort === option.value" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Active Filters Badge -->
          <div v-if="filter !== 'all' || sort !== 'newest'" class="flex items-center space-x-2">
            <div class="bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-300/50">
              <span class="text-sm font-medium text-slate-700">
                {{ filterOptions.find(f => f.value === filter)?.label || 'All Courses' }}
              </span>
            </div>
            <button @click="resetFilters" 
                    class="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200">
              Clear
            </button>
          </div>
        </div>
        
        <!-- Create Course Button -->
        <router-link to="/courses/new" 
                   class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                          text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                          px-6 py-3 rounded-xl font-medium transition-all duration-300
                          flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Create Course</span>
        </router-link>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="relative group">
          <div class="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-slate-600 mb-1">Total Courses</p>
                <p class="text-3xl font-bold text-primary">{{ filteredCourses.length }}</p>
              </div>
              <div class="bg-primary/10 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2">Available to explore</p>
          </div>
        </div>
        
        <div class="relative group">
          <div class="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-slate-600 mb-1">Avg. Rating</p>
                <p class="text-3xl font-bold text-amber-600">4.8</p>
              </div>
              <div class="bg-amber-500/10 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2">Based on 1,234 reviews</p>
          </div>
        </div>
        
        <div class="relative group">
          <div class="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-slate-600 mb-1">Total Students</p>
                <p class="text-3xl font-bold text-emerald-600">5,678</p>
              </div>
              <div class="bg-emerald-500/10 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 5.197v-1a6 6 0 00-4.5-5.799M4 21v-1a6 6 0 014.5-5.799" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2">Active learners</p>
          </div>
        </div>
        
        <div class="relative group">
          <div class="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-slate-600 mb-1">Completion Rate</p>
                <p class="text-3xl font-bold text-blue-600">87%</p>
              </div>
              <div class="bg-blue-500/10 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2">Higher than average</p>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="courseStore.isLoading" class="py-20">
        <div class="flex flex-col items-center">
          <div class="relative mb-6">
            <div class="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <p class="text-slate-700 font-medium">Loading courses...</p>
          <p class="text-sm text-slate-500 mt-2">Discovering amazing content for you</p>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-else-if="filteredCourses.length === 0" class="py-20">
        <div class="max-w-md mx-auto text-center">
          <div class="relative inline-flex mb-6">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-full blur-xl"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-slate-400 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-slate-800 mb-4">No courses found</h3>
          <p class="text-slate-600 mb-8">
            {{ filter === 'enrolled' ? 'You haven\'t enrolled in any courses yet. Start your learning journey!' : 
                  filter === 'created' ? 'You haven\'t created any courses yet. Share your knowledge!' : 
                  'Try adjusting your search or filters to find what you\'re looking for.' }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="resetFilters" 
                    class="btn bg-white/80 backdrop-blur-sm border border-slate-300/50 hover:border-slate-400 
                           text-slate-700 hover:bg-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
              Reset Filters
            </button>
            <router-link v-if="filter !== 'created'" to="/courses/new" 
                       class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                              text-white border-0 px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Create Your First Course
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Course Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard 
          v-for="course in paginatedCourses" 
          :key="course.id" 
          :course="course"
          @enroll="enrollInCourse"
          @view="viewCourseDetails"
        />
      </div>

      <!-- Pagination -->
      <div v-if="filteredCourses.length > 0 && totalPages > 1" class="mt-12">
        <div class="flex justify-center">
          <div class="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-300/50 
                      rounded-xl p-2 shadow-lg shadow-slate-200/50">
            <button @click="prevPage" 
                    :disabled="currentPage === 1"
                    class="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    :class="{ 'hover:bg-slate-100': currentPage > 1 }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div class="flex items-center space-x-1">
              <button v-for="page in visiblePages" :key="page"
                      @click="currentPage = page"
                      class="w-10 h-10 rounded-lg font-medium transition-all duration-200"
                      :class="page === currentPage 
                              ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20' 
                              : 'text-slate-700 hover:bg-slate-100'">
                {{ page === '...' ? '...' : page }}
              </button>
            </div>
            
            <button @click="nextPage" 
                    :disabled="currentPage === totalPages"
                    class="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    :class="{ 'hover:bg-slate-100': currentPage < totalPages }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <p class="text-sm text-slate-600">
            Page {{ currentPage }} of {{ totalPages }} • Showing {{ ((currentPage - 1) * itemsPerPage) + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredCourses.length) }} of {{ filteredCourses.length }} courses
          </p>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { useCourseStore } from '../stores/courseStore'
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from '../components/Course/CourseCard.vue'
import Navbar from '../components/Layout/Navbar.vue'
import Footer from '../components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'
const courseStore = useCourseStore()
const router = useRouter()

const searchQuery = ref('')
const filter = ref('all')
const sort = ref('newest')
const currentPage = ref(1)
const itemsPerPage = 9

// Filter options
const filterOptions = [
  { value: 'all', label: 'All Courses' },
  { value: 'enrolled', label: 'My Enrollments' },
  { value: 'created', label: 'Created by Me' },
  { value: 'public', label: 'Public Courses' }
]

// Sort options
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'duration', label: 'Shortest Duration' }
]

onMounted(async () => {
  await courseStore.fetchAllCourses()
})

const filteredCourses = computed(() => {
  let courses = courseStore.courses
  
  // Apply filter
  switch (filter.value) {
    case 'enrolled':
      courses = courseStore.enrolledCourses
      break
    case 'created':
      courses = courseStore.createdCourses
      break
    case 'public':
      courses = courses.filter(course => course.is_public)
      break
  }
  
  // Apply search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    courses = courses.filter(course => 
      course.title?.toLowerCase().includes(query) ||
      course.description?.toLowerCase().includes(query) ||
      course.creator?.username?.toLowerCase().includes(query)
    )
  }
  
  // Apply sorting
  switch (sort.value) {
    case 'newest':
      courses = [...courses].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      )
      break
    case 'popular':
      courses = [...courses].sort((a, b) => 
        (b.total_enrollments || 0) - (a.total_enrollments || 0)
      )
      break
    case 'rating':
      courses = [...courses].sort((a, b) => 
        (b.average_rating || 0) - (a.average_rating || 0)
      )
      break
    case 'duration':
      courses = [...courses].sort((a, b) => 
        (a.total_pages || 0) - (b.total_pages || 0)
      )
      break
  }
  
  return courses
})

const totalPages = computed(() => 
  Math.ceil(filteredCourses.value.length / itemsPerPage)
)

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredCourses.value.slice(start, end)
})

// Smart pagination display
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  
  if (totalPages.value <= maxVisible) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
    
    if (currentPage.value > 3) {
      pages.push('...')
    }
    
    const start = Math.max(2, currentPage.value - 1)
    const end = Math.min(totalPages.value - 1, currentPage.value + 1)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    if (currentPage.value < totalPages.value - 2) {
      pages.push('...')
    }
    
    pages.push(totalPages.value)
  }
  
  return pages
})

watch([filter, searchQuery], () => {
  currentPage.value = 1
})

const setFilter = (filterType) => {
  filter.value = filterType
}

const setSort = (sortType) => {
  sort.value = sortType
}

const resetFilters = () => {
  filter.value = 'all'
  searchQuery.value = ''
  sort.value = 'newest'
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const enrollInCourse = async (course) => {
  // console.log('Enrolling in course:', course)
  const result = await courseStore.enrollInCourse(course.slug)
  if (result.success) {
    // Show success toast
    push.success('Successfully enrolled in course!')
  }
}

const viewCourseDetails = (course) => {
  router.push(`/course/${course.slug}`)
}
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>