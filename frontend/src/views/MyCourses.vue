<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-10">
        <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
          <!-- Page Info -->
          <div class="flex-1">
            <!-- Breadcrumb -->
            <div class="mb-6">
              <nav class="flex items-center space-x-2 text-sm text-slate-600">
                <router-link to="/courses" class="hover:text-primary transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Courses
                </router-link>
                <span class="text-slate-400">›</span>
                <span class="text-primary font-medium">My Courses</span>
              </nav>
            </div>

            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              My Learning Dashboard
            </h1>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl">
              Manage your enrolled courses, track progress, and continue your learning journey
            </p>

            <!-- Quick Stats -->
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                  <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full 
                              flex items-center justify-center text-white font-bold text-lg">
                    {{ enrolledCourses.length }}
                  </div>
                </div>
                <div>
                  <p class="font-semibold text-slate-800">Total Enrolled</p>
                  <p class="text-sm text-slate-600">{{ completedCoursesCount }} completed</p>
                </div>
              </div>

              <div class="hidden lg:block h-8 w-px bg-slate-300/50"></div>

              <div class="flex items-center space-x-6">
                <div class="flex items-center space-x-2">
                  <div class="bg-slate-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-600">Time Spent</p>
                    <p class="font-semibold text-slate-800">{{ formatTime(totalTimeSpent) }}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <div class="bg-slate-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-600">Avg. Progress</p>
                    <p class="font-semibold text-slate-800">{{ averageProgress }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Create Course Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6 w-full lg:w-64">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-emerald-500 to-emerald-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800">Create Course</h3>
              </div>

              <p class="text-sm text-slate-600 mb-6">
                Share your knowledge by creating and publishing your own courses
              </p>

              <router-link to="/courses/new" 
                          class="w-full btn bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 
                                 text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30
                                 py-3 rounded-xl font-medium transition-all duration-300">
                Create New Course
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="relative mb-10">
        <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                    border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
        
        <div class="relative p-1">
          <div class="flex space-x-1">
            <button @click="activeTab = 'enrolled'" 
                    class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                    :class="activeTab === 'enrolled' 
                      ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                      : 'hover:bg-slate-100 text-slate-700'">
              <div class="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Enrolled Courses</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {{ enrolledCourses.length }}
                </span>
              </div>
            </button>
            
            <button @click="activeTab = 'created'" 
                    class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                    :class="activeTab === 'created' 
                      ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                      : 'hover:bg-slate-100 text-slate-700'">
              <div class="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Created Courses</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {{ createdCourses.length }}
                </span>
              </div>
            </button>
            
            <button @click="activeTab = 'bookmarks'" 
                    class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                    :class="activeTab === 'bookmarks' 
                      ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                      : 'hover:bg-slate-100 text-slate-700'">
              <div class="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Bookmarks</span>
                <span class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {{ totalBookmarks }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="courseStore.isLoading" class="text-center py-16">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
        <p class="mt-4 text-slate-600">Loading your courses...</p>
      </div>

      <!-- Content based on active tab -->
      <template v-else>
        <!-- Enrolled Courses -->
        <div v-if="activeTab === 'enrolled'">
          <div v-if="enrolledCourses.length === 0" class="text-center py-16">
            <div class="relative inline-flex mb-8">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-slate-800 mb-3">No Enrolled Courses</h3>
            <p class="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              You haven't enrolled in any courses yet. Start your learning journey by exploring available courses.
            </p>
            
            <router-link to="/courses" 
                        class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                               text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                               py-3 px-6 rounded-xl font-medium transition-all duration-300">
              Browse Courses
            </router-link>
          </div>
          
          <div v-else>
            <!-- Detailed Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <!-- Completed Courses -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                            border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
                <div class="relative p-6">
                  <div class="flex items-center space-x-3">
                    <div class="bg-gradient-to-br from-emerald-500 to-emerald-400 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-slate-800">{{ completedCoursesCount }}</p>
                      <p class="text-sm text-slate-600">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Time Spent -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                            border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
                <div class="relative p-6">
                  <div class="flex items-center space-x-3">
                    <div class="bg-gradient-to-br from-amber-500 to-amber-400 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-slate-800">{{ formatTime(totalTimeSpent) }}</p>
                      <p class="text-sm text-slate-600">Time Spent</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Average Progress -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                            border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
                <div class="relative p-6">
                  <div class="flex items-center space-x-3">
                    <div class="bg-gradient-to-br from-blue-500 to-blue-400 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-slate-800">{{ averageProgress }}%</p>
                      <p class="text-sm text-slate-600">Avg. Progress</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Bookmarks -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                            border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
                <div class="relative p-6">
                  <div class="flex items-center space-x-3">
                    <div class="bg-gradient-to-br from-purple-500 to-purple-400 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-2xl font-bold text-slate-800">{{ totalBookmarks }}</p>
                      <p class="text-sm text-slate-600">Bookmarks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Course List -->
            <div class="space-y-6">
              <div v-for="enrollment in enrolledCourses" :key="enrollment.id" 
                   class="relative group">
                <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                            border border-slate-300/50 shadow-xl shadow-slate-200/50 
                            hover:shadow-slate-300/50 transition-all duration-300"></div>
                
                <div class="relative p-6">
                  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <!-- Course Info -->
                    <div class="flex-1">
                      <div class="flex items-start gap-6">
                        <!-- Course Avatar -->
                        <div class="relative">
                          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-xl"></div>
                          <div class="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl 
                                      flex items-center justify-center text-white font-bold text-xl">
                            {{ enrollment.course.title.charAt(0) }}
                          </div>
                        </div>
                        
                        <div class="flex-1">
                          <div class="flex items-center gap-3 mb-3">
                            <h3 class="text-xl font-bold text-slate-800">{{ enrollment.course.title }}</h3>
                            <span v-if="enrollment.completed_at" 
                                  class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 text-emerald-600 border border-emerald-500/20">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                              </svg>
                              Completed
                            </span>
                            <span v-else 
                                  class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                              In Progress
                            </span>
                          </div>
                          
                          <p class="text-slate-600 mb-4 line-clamp-2">{{ enrollment.course.description || 'No description available' }}</p>
                          
                          <!-- Progress Bar -->
                          <div class="space-y-2 mb-4">
                            <div class="flex justify-between text-sm">
                              <span class="text-slate-600">Progress: {{ Math.round(enrollment.progress_percentage) }}%</span>
                              <span class="text-slate-800 font-medium">Page {{ enrollment.current_page }} of {{ enrollment.course.total_pages }}</span>
                            </div>
                            <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div class="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                                   :style="{ width: `${enrollment.progress_percentage}%` }"></div>
                            </div>
                          </div>
                          
                          <!-- Course Stats -->
                          <div class="flex flex-wrap gap-6">
                            <div class="flex items-center gap-2 text-sm text-slate-600">
                              <div class="p-1.5 bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span>{{ formatTime(enrollment.time_spent) }}</span>
                            </div>
                            
                            <div class="flex items-center gap-2 text-sm text-slate-600">
                              <div class="p-1.5 bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </div>
                              <span>{{ enrollment.bookmarked_pages?.length || 0 }} bookmarks</span>
                            </div>
                            
                            <div class="flex items-center gap-2 text-sm text-slate-600">
                              <div class="p-1.5 bg-slate-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </div>
                              <span>{{ enrollment.notes ? Object.keys(enrollment.notes).length : 0 }} notes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex flex-col gap-3 min-w-[200px]">
                      <button @click="continueCourse(enrollment)"
                              class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                     text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                     py-3 rounded-xl font-medium transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        {{ enrollment.completed_at ? 'Review' : 'Continue' }}
                      </button>
                      
                      <div class="relative group/dropdown">
                        <button class="w-full px-4 py-2.5 bg-white/80 backdrop-blur-sm 
                                       border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                                       text-slate-700 hover:text-slate-800 transition-all duration-200">
                          <div class="flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                            <span>More Actions</span>
                          </div>
                        </button>
                        
                        <div class="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm 
                                    border border-slate-300/50 rounded-xl shadow-xl shadow-slate-200/50 
                                    opacity-0 invisible group-hover/dropdown:opacity-100 
                                    group-hover/dropdown:visible transition-all duration-200 z-10">
                          <div class="py-2">
                            <button @click="viewCourse(enrollment.course)"
                                    class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                           flex items-center space-x-3">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span class="font-medium text-slate-700">View Details</span>
                            </button>
                            
                            <button @click="exportProgress(enrollment)"
                                    class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                           flex items-center space-x-3">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span class="font-medium text-slate-700">Export Progress</span>
                            </button>
                            
                            <button @click="resetProgress(enrollment)"
                                    class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                           flex items-center space-x-3 text-amber-600">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                              <span class="font-medium">Reset Progress</span>
                            </button>
                            
                            <button @click="unenroll(enrollment)"
                                    class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                           flex items-center space-x-3 text-red-600">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              <span class="font-medium">Unenroll</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Created Courses -->
        <div v-else-if="activeTab === 'created'">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h2 class="text-2xl font-bold text-slate-800 mb-2">Courses Created by You</h2>
              <p class="text-slate-600">Manage and track the performance of your published courses</p>
            </div>
            <router-link to="/courses/new" 
                        class="btn bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 
                               text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30
                               py-3 px-6 rounded-xl font-medium transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create New Course
            </router-link>
          </div>
          
          <div v-if="createdCourses.length === 0" class="text-center py-16">
            <div class="relative inline-flex mb-8">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-slate-800 mb-3">No Courses Created</h3>
            <p class="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              You haven't created any courses yet. Share your knowledge by creating a course.
            </p>
            <router-link to="/courses/new" 
                        class="btn bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 
                               text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30
                               py-3 px-6 rounded-xl font-medium transition-all duration-300">
              Create Your First Course
            </router-link>
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="course in createdCourses" :key="course.id" 
                 class="relative group">
              <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                          border border-slate-300/50 shadow-lg shadow-slate-200/50 
                          hover:shadow-slate-300/50 transition-all duration-300"></div>
              
              <div class="relative p-6">
                <!-- Course Status Badge -->
                <div class="flex justify-between items-start mb-4">
                  <span :class="course.is_public 
                         ? 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 text-emerald-600 border border-emerald-500/20'
                         : 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/10 to-amber-400/10 text-amber-600 border border-amber-500/20'">
                    {{ course.is_public ? 'Public' : 'Private' }}
                  </span>
                  
                  <div class="relative group/dropdown">
                    <button class="p-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    
                    <div class="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm 
                                border border-slate-300/50 rounded-xl shadow-xl shadow-slate-200/50 
                                opacity-0 invisible group-hover/dropdown:opacity-100 
                                group-hover/dropdown:visible transition-all duration-200 z-10">
                      <div class="py-2">
                        <button @click="editCourse(course)"
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span class="font-medium text-slate-700">Edit Course</span>
                        </button>
                        
                        <button @click="viewCourse(course)"
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span class="font-medium text-slate-700">View Details</span>
                        </button>
                        
                        <button @click="viewAnalytics(course)"
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span class="font-medium text-slate-700">View Analytics</span>
                        </button>
                        
                        <button @click="deleteCourse(course)"
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3 text-red-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span class="font-medium">Delete Course</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Course Title -->
                <h3 class="text-lg font-bold text-slate-800 mb-2 line-clamp-1">{{ course.title }}</h3>
                <p class="text-slate-600 text-sm line-clamp-2 mb-6">{{ course.description || 'No description available' }}</p>
                
                <!-- Course Stats -->
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">Enrollments</span>
                    <span class="font-medium text-slate-800">{{ course.total_enrollments || 0 }}</span>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">Rating</span>
                    <div class="flex items-center gap-2">
                      <div class="flex">
                        <svg v-for="i in 5" :key="i" 
                             xmlns="http://www.w3.org/2000/svg" 
                             class="h-4 w-4" 
                             :class="i <= Math.round(course.average_rating || 0) ? 'text-amber-500' : 'text-slate-300'"
                             viewBox="0 0 20 20" 
                             fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-slate-800">{{ course.average_rating?.toFixed(1) || '0.0' }}</span>
                    </div>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">Created</span>
                    <span class="font-medium text-slate-800">{{ formatDate(course.created_at) }}</span>
                  </div>
                </div>
                
                <!-- Manage Button -->
                <div class="mt-6">
                  <button @click="viewCourse(course)"
                          class="w-full px-4 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                                 border border-primary/20 text-primary rounded-xl font-medium transition-all duration-200">
                    Manage Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bookmarks -->
        <div v-else-if="activeTab === 'bookmarks'">
          <div v-if="bookmarkedPages.length === 0" class="text-center py-16">
            <div class="relative inline-flex mb-8">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-slate-800 mb-3">No Bookmarks Yet</h3>
            <p class="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              Bookmark important pages in your courses to quickly return to them later.
            </p>
            <router-link to="/courses" 
                        class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                               text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                               py-3 px-6 rounded-xl font-medium transition-all duration-300">
              Browse Courses
            </router-link>
          </div>
          
          <div v-else class="space-y-6">
            <div v-for="bookmark in bookmarkedPages" :key="bookmark.id" 
                 class="relative group">
              <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                          border border-slate-300/50 shadow-lg shadow-slate-200/50 
                          hover:shadow-slate-300/50 transition-all duration-300"></div>
              
              <div class="relative p-6">
                <div class="flex items-start gap-6">
                  <!-- Bookmark Icon -->
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-xl"></div>
                    <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl 
                                flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="flex-1">
                    <!-- Header -->
                    <div class="flex justify-between items-start mb-2">
                      <h3 class="text-lg font-bold text-slate-800">{{ bookmark.course.title }}</h3>
                      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                        Page {{ bookmark.page }}
                      </span>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-slate-600 mb-4">
                      Bookmarked on {{ formatDate(bookmark.created_at) }}
                    </p>
                    
                    <!-- Actions -->
                    <div class="flex gap-3">
                      <button @click="goToBookmark(bookmark)"
                              class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                     text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                     py-2 px-4 rounded-xl font-medium transition-all duration-300">
                        Go to Bookmark
                      </button>
                      <button @click="removeBookmark(bookmark)"
                              class="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                                     border border-slate-300/50 text-slate-700 rounded-xl font-medium transition-all duration-200">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    
    <Footer />
  </div>

  <!-- Add this modal at the end of your template, before closing </template> -->
  <div v-if="showConfirmModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
    <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full">
      <div class="mb-4">
        <h3 class="text-lg font-bold text-slate-800 mb-2">{{ confirmModal.title }}</h3>
        <p class="text-slate-600">{{ confirmModal.message }}</p>
      </div>
      <div class="flex justify-end gap-3 mt-6">
        <button @click="cancelConfirm" 
                class="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200">
          Cancel
        </button>
        <button @click="confirmAction" 
                :class="confirmModal.type === 'danger' 
                  ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white'"
                class="px-4 py-2 rounded-xl transition-all duration-200">
          {{ confirmModal.confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/courseStore'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'
// Add these to your script setup
const showConfirmModal = ref(false);
const confirmModal = ref({
  title: '',
  message: '',
  confirmText: 'Confirm',
  type: 'warning',
  action: null,
  enrollment: null
});
const router = useRouter()
const courseStore = useCourseStore()

const activeTab = ref('enrolled')

onMounted(async () => {
  await courseStore.fetchAllCourses()
  await courseStore.fetchUserEnrollments()
})

const enrolledCourses = computed(() => {
  return courseStore.enrollments
})

const createdCourses = computed(() => {
  return courseStore.createdCourses
})

const completedCoursesCount = computed(() => {
  return enrolledCourses.value.filter(e => e.completed_at).length
})

const totalTimeSpent = computed(() => {
  return enrolledCourses.value.reduce((total, e) => total + (e.time_spent || 0), 0)
})

const averageProgress = computed(() => {
  if (enrolledCourses.value.length === 0) return 0
  const total = enrolledCourses.value.reduce((sum, e) => sum + e.progress_percentage, 0)
  return Math.round(total / enrolledCourses.value.length)
})

const totalBookmarks = computed(() => {
  return enrolledCourses.value.reduce((total, e) => total + (e.bookmarked_pages?.length || 0), 0)
})

const bookmarkedPages = computed(() => {
  const pages = []
  enrolledCourses.value.forEach(enrollment => {
    if (enrollment.bookmarked_pages) {
      enrollment.bookmarked_pages.forEach(page => {
        pages.push({
          id: `${enrollment.id}-${page}`,
          course: enrollment.course,
          page: page,
          enrollment: enrollment,
          created_at: new Date().toISOString() // In real app, get from logs
        })
      })
    }
  })
  return pages
})

const continueCourse = (enrollment) => {
  router.push(`/course/${enrollment.course.slug}`)
}

const viewCourse = (course) => {
  router.push(`/course/${course.slug}`)
}

const editCourse = (course) => {
  // Implement edit course functionality
  push.info('Edit course feature coming soon!')
}

const viewAnalytics = (course) => {
  // Implement analytics view
  push.info('Analytics feature coming soon!')
}

const deleteCourse = async (course) => {
  if (confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
    // Implement delete course
    push.info('Delete course feature coming soon!')
  }
}

const exportProgress = (enrollment) => {
  // Implement export progress
 
  downloadCourse(enrollment.course)
}

const downloadCourse = async (course) => {
  try {
     
    if (!course || !course.file_url) {
      push.error('No file available for download')
      return
    }
    
    push.info('Preparing download...')
    
    const token = localStorage.getItem('access_token')
    
    // Fetch the file
    const response = await fetch(course.file_url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status}`)
    }
    
    // Get the blob
    const blob = await response.blob()
    
    // Create download link
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    
    // Extract filename from URL or use course title
    const fileName = course.file_name || 
                     `${course.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${course.file_type || 'pdf'}`
    
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    
    // Trigger download
    link.click()
    
    // Clean up
    window.URL.revokeObjectURL(url)
    document.body.removeChild(link)
    
    push.success(`Download started: ${fileName}`)
    
  } catch (error) {
    console.error('Download error:', error)
    push.error(`Failed to download: ${error.message}`)
  }
}

// Replace the current resetProgress and unenroll functions with these:

// Update your resetProgress and unenroll functions to use the modal:
const resetProgress = (enrollment) => {
  confirmModal.value = {
    title: 'Reset Progress',
    message: 'Are you sure you want to reset your progress? This will delete all your bookmarks and notes, and reset progress to page 1. This action cannot be undone.',
    confirmText: 'Reset Progress',
    type: 'danger',
    action: 'reset',
    enrollment: enrollment
  };
  showConfirmModal.value = true;
};

const unenroll = (enrollment) => {
  confirmModal.value = {
    title: 'Unenroll from Course',
    message: 'Are you sure you want to unenroll from this course? This will delete all your progress, bookmarks, and notes. This action cannot be undone.',
    confirmText: 'Unenroll',
    type: 'danger',
    action: 'unenroll',
    enrollment: enrollment
  };
  showConfirmModal.value = true;
};

const confirmAction = async () => {
  if (!confirmModal.value.enrollment) return;
  
  try {
    if (confirmModal.value.action === 'reset') {
      await performResetProgress(confirmModal.value.enrollment);
    } else if (confirmModal.value.action === 'unenroll') {
      await performUnenroll(confirmModal.value.enrollment);
    }
  } finally {
    showConfirmModal.value = false;
    confirmModal.value = { action: null, enrollment: null };
  }
};

const cancelConfirm = () => {
  showConfirmModal.value = false;
  confirmModal.value = { action: null, enrollment: null };
};

// Move the actual API calls to separate functions
const performResetProgress = async (enrollment) => {
  try {
    push.info('Resetting progress...');
    
    const token = localStorage.getItem('access_token');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enrollments/${enrollment.id}/reset-progress/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to reset progress: ${response.statusText}`);
    }

    await courseStore.fetchUserEnrollments();
    push.success('Progress reset successfully! Starting from page 1.');
    
  } catch (error) {
    console.error('Reset progress error:', error);
    push.error(`Failed to reset progress: ${error.message}`);
  }
};

const performUnenroll = async (enrollment) => {
  try {
    push.info('Unenrolling from course...');
    
    const token = localStorage.getItem('access_token');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enrollments/${enrollment.id}/unenroll/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to unenroll: ${response.statusText}`);
    }

    const index = courseStore.enrollments.findIndex(e => e.id === enrollment.id);
    if (index > -1) {
      courseStore.enrollments.splice(index, 1);
    }
    
    await courseStore.fetchAllCourses();
    push.success('Successfully unenrolled from the course.');
    
  } catch (error) {
    console.error('Unenroll error:', error);
    push.error(`Failed to unenroll: ${error.message}`);
  }
};

const goToBookmark = (bookmark) => {
  router.push(`/course/${bookmark.course.slug}?page=${bookmark.page}`)
}

const removeBookmark = (bookmark) => {
  // Implement remove bookmark
  push.info('Remove bookmark feature coming soon!')
}

const formatTime = (seconds) => {
  console.log('Formatting time for seconds:', seconds);
  if (!seconds) return '0s';
  
  if (seconds < 60) return `${seconds}s`;
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    // Format with hours, minutes, and seconds
    if (minutes === 0 && remainingSeconds === 0) {
      return `${hours}h`;
    } else if (remainingSeconds === 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${hours}h ${minutes}m ${remainingSeconds}s`;
    }
  } else if (minutes > 0) {
    // Format with minutes and seconds only
    if (remainingSeconds === 0) {
      return `${minutes}m`;
    } else {
      return `${minutes}m ${remainingSeconds}s`;
    }
  } else {
    return `${seconds}s`;
  }
}
</script>