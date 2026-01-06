<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <!-- Welcome Section -->
      <div class="mb-10">
        <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
          <!-- Page Info -->
          <div class="flex-1">
            <!-- Breadcrumb -->
            <div class="mb-6">
              <nav class="flex items-center space-x-2 text-sm text-slate-600">
                <router-link to="/" class="hover:text-primary transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </router-link>
                <span class="text-slate-400">›</span>
                <span class="text-primary font-medium">Dashboard</span>
              </nav>
            </div>

            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              Welcome back, <span class="text-primary">{{ authStore.user?.first_name || 'Learner' }}</span>!
            </h1>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl">
              Continue your learning journey and track your progress
            </p>

            <!-- Learning Streak -->
            <div class="flex items-center space-x-3">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full 
                            flex items-center justify-center text-white font-bold text-lg">
                  {{ streakDays }}
                </div>
              </div>
              <div>
                <p class="font-semibold text-slate-800">{{ streakDays }} day streak</p>
                <p class="text-sm text-slate-600">Keep your learning momentum going!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <!-- Total Courses Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
          
          <div class="relative p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">Total Courses</h3>
            </div>
            
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-slate-800">{{ stats?.total_courses || 0 }}</p>
                <p class="text-sm text-slate-600 mt-1">{{ stats?.completed_courses || 0 }} completed</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Time Spent Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
          
          <div class="relative p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-gradient-to-br from-amber-500 to-amber-400 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">Hours Learned</h3>
            </div>
            
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-slate-800">{{ stats?.total_time_spent_hours || 0 }}</p>
                <p class="text-sm text-slate-600 mt-1">{{ stats?.total_time_spent_seconds || 0 }} seconds total</p>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
          
          <div class="relative p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-gradient-to-br from-emerald-500 to-emerald-400 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">In Progress</h3>
            </div>
            
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-slate-800">{{ stats?.in_progress_courses || 0 }}</p>
                <p class="text-sm text-slate-600 mt-1">Active learning</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Completion Rate Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                      border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
          
          <div class="relative p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="bg-gradient-to-br from-blue-500 to-blue-400 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">Completion Rate</h3>
            </div>
            
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-slate-800">{{ completionRate }}%</p>
                <div class="mt-2">
                  <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                         :style="{ width: `${completionRate}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Recent Progress -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Recent Progress Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h2 class="text-xl font-semibold text-slate-800">Recent Progress</h2>
                  <p class="text-sm text-slate-600">Your active courses and progress</p>
                </div>
                <router-link to="/my-courses" 
                            class="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                                   border border-primary/20 text-primary rounded-xl font-medium transition-all duration-200">
                  View All
                </router-link>
              </div>
              
              <div v-if="stats?.courses_in_progress?.length" class="space-y-6">
                <div v-for="course in stats.courses_in_progress.slice(0, 3)" :key="course.course_title" 
                     class="p-5 bg-gradient-to-br from-slate-50 to-white/50 rounded-xl 
                            border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="font-bold text-lg text-slate-800">{{ course.course_title }}</h3>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20">
                      {{ Math.round(course.progress_percent) }}%
                    </span>
                  </div>
                  
                  <!-- Progress Bar -->
                  <div class="mb-4">
                    <div class="flex justify-between text-sm mb-2">
                      <span class="text-slate-600">Page {{ course.current_page }} of {{ course.total_pages }}</span>
                      <span class="font-medium text-slate-800">{{ Math.round(course.progress_percent) }}% complete</span>
                    </div>
                    <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                           :style="{ width: `${course.progress_percent}%` }"></div>
                    </div>
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">
                      {{ Math.ceil((course.total_pages - course.current_page) * 5) }} minutes remaining
                    </span>
                    <button @click="continueCourse(course)"
                            class="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                   text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                   rounded-xl font-medium transition-all duration-300">
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-12">
                <div class="relative inline-flex mb-4">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-lg rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800 mb-2">No active courses</h3>
                <p class="text-slate-600 mb-6 max-w-md mx-auto">Start your learning journey by enrolling in a course</p>
                <router-link to="/courses" 
                            class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                   text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                   py-3 px-6 rounded-xl font-medium transition-all duration-300">
                  Browse Courses
                </router-link>
              </div>
            </div>
          </div>

          <!-- Daily Goals & Streak -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Daily Goal -->
            <div class="relative group">
              <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                          border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
              
              <div class="relative p-6">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-800">Daily Goal</h3>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <div class="w-20 h-20">
                      <svg class="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" stroke-width="8" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#dailyGoal)" 
                                :stroke-dasharray="`${dailyGoalProgress * 2.827} 282.7`" 
                                stroke-width="8" stroke-linecap="round" transform="rotate(-90 50 50)" />
                        <defs>
                          <linearGradient id="dailyGoal" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <span class="text-2xl font-bold text-slate-800">{{ dailyGoalProgress }}%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-slate-800">{{ completedToday }}/60 min</p>
                    <p class="text-sm text-slate-600 mt-1">minutes learned today</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Weekly Streak -->
            <div class="relative group">
              <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                          border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
              
              <div class="relative p-6">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="bg-gradient-to-br from-amber-500 to-amber-400 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-slate-800">Weekly Streak</h3>
                </div>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-700">Current streak:</span>
                    <span class="text-2xl font-bold text-amber-600">{{ streakDays }} days</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex space-x-1">
                      <div v-for="day in 7" :key="day" 
                           class="h-2 flex-1 rounded-full transition-all duration-300"
                           :class="day <= streakDays 
                             ? 'bg-gradient-to-r from-amber-500 to-amber-400' 
                             : 'bg-slate-200'">
                      </div>
                    </div>
                    <p class="text-xs text-slate-600 text-center">Keep going to maintain your streak!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Activity & Recommendations -->
        <div class="space-y-8">
          <!-- Recent Activity -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800">Recent Activity</h3>
              </div>
              
              <div v-if="stats?.recent_progress?.length" class="space-y-3">
                <div v-for="activity in stats.recent_progress.slice(0, 5)" :key="activity.id" 
                     class="flex items-center space-x-3 p-3 hover:bg-gradient-to-r from-slate-50 to-white/50 
                            rounded-xl transition-all duration-200">
                  <!-- Activity Icon -->
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-xl"></div>
                    <div class="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl 
                                flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="flex-1">
                    <p class="text-sm font-medium text-slate-800">Page {{ activity.page_number }} viewed</p>
                    <p class="text-xs text-slate-500">{{ formatTimeAgo(activity.created_at) }}</p>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p class="text-slate-600">No recent activity</p>
              </div>
            </div>
          </div>

          <!-- Recommended Courses -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-emerald-500 to-emerald-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800">Recommended For You</h3>
              </div>
              
              <div v-if="recommendedCourses.length" class="space-y-4">
                <div v-for="course in recommendedCourses.slice(0, 3)" :key="course.id" 
                     class="p-4 bg-gradient-to-br from-slate-50 to-white/50 rounded-xl 
                            border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200
                            cursor-pointer group"
                     @click="viewCourse(course)">
                  <div class="flex items-center space-x-4">
                    <!-- Course Avatar -->
                    <div class="relative">
                      <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 blur-lg rounded-xl"></div>
                      <div class="relative  w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl 
                                  flex items-center justify-center text-white font-bold">
                        {{ course.title.charAt(0) }}
                      </div>
                    </div>
                    
                    <div class="flex-1">
                      <h4 class="font-medium text-slate-800 group-hover:text-primary transition-colors duration-200">
                        {{ course.title }}
                      </h4>
                      <div class="flex items-center text-sm text-slate-600 mt-1">
                        <span>{{ course.total_pages }} pages</span>
                        <span class="mx-2">•</span>
                        <span>{{ Math.ceil(course.total_pages * 5) }} min</span>
                      </div>
                    </div>
                    
                    <button @click.stop="enrollCourse(course)"
                            class="px-3 py-1.5 text-sm bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 
                                   hover:from-emerald-500/15 hover:to-emerald-400/10 border border-emerald-500/20 
                                   text-emerald-600 rounded-lg font-medium transition-all duration-200">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <p class="text-slate-600">No recommendations yet</p>
              </div>
              
              <div class="flex justify-center mt-6 pt-6 border-t border-slate-300/50">
                <router-link to="/courses" 
                            class="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                                   border border-slate-300/50 text-slate-700 rounded-xl font-medium transition-all duration-200">
                  View all recommendations
                </router-link>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-blue-500 to-blue-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800">Quick Actions</h3>
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <!-- New Course -->
                <button @click="createNewCourse"
                        class="p-4 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                               border border-primary/20 rounded-xl text-center transition-all duration-200 group">
                  <div class="flex flex-col items-center">
                    <div class="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-2 group-hover:from-primary/30 group-hover:to-primary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-primary">New Course</span>
                  </div>
                </button>
                
                <!-- My Courses -->
                <router-link to="/my-courses"
                        class="p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 hover:from-emerald-500/15 hover:to-emerald-400/10 
                               border border-emerald-500/20 rounded-xl text-center transition-all duration-200 group">
                  <div class="flex flex-col items-center">
                    <div class="p-2 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-lg mb-2 group-hover:from-emerald-500/30 group-hover:to-emerald-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-emerald-600">My Courses</span>
                  </div>
                </router-link>
                
                <!-- Learning Path -->
                <button @click="showLearningPath"
                        class="col-span-2 p-4 bg-gradient-to-br from-amber-500/10 to-amber-400/5 hover:from-amber-500/15 hover:to-amber-400/10 
                               border border-amber-500/20 rounded-xl text-center transition-all duration-200 group">
                  <div class="flex items-center justify-center space-x-3">
                    <div class="p-2 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-lg group-hover:from-amber-500/30 group-hover:to-amber-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-amber-600">Create Learning Path</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore'
import { useCourseStore } from '../stores/courseStore'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Layout/Navbar.vue'
import Footer from '../components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'
const authStore = useAuthStore()
const courseStore = useCourseStore()
const router = useRouter()

const streakDays = ref(7)
const completedToday = ref(45)
const dailyGoalProgress = computed(() => Math.round((completedToday.value / 60) * 100))

// Mock data for recommendations (replace with real API)
// const recommendedCourses = ref([
//   { id: 1, title: 'Advanced Vue.js Patterns', total_pages: 120 },
//   { id: 2, title: 'Django REST Framework Mastery', total_pages: 95 },
//   { id: 3, title: 'Tailwind CSS Pro Tips', total_pages: 75 }
// ])
const recommendedCourses = computed(() => courseStore.courses || [])

const stats = computed(() => courseStore.dashboardStats || {})

const completionRate = computed(() => {
  const total = stats.value?.total_courses || 0
  const completed = stats.value?.completed_courses || 0
  return total > 0 ? Math.round((completed / total) * 100) : 0
})

onMounted(async () => {
  try {
    await courseStore.fetchDashboardStats()
    await courseStore.fetchAllCourses()
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  }
})

const formatTimeAgo = (timestamp) => {
  if (!timestamp) return 'Recently'
  
  const now = new Date()
  const past = new Date(timestamp)
  const diffInSeconds = Math.floor((now - past) / 1000)
  
  // Calculate time differences
  const seconds = diffInSeconds
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)
  
  // Return appropriate format
  if (seconds < 60) {
    return 'Just now'
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (days < 7) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (weeks < 4) {
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
}

const continueCourse = (course) => {
  // Navigate to course page
  // console.log('Continuing course:', course) 
  router.push(`/course/${course.course_slug || course.id}`)
}

const viewCourse = (course) => {
  router.push(`/course/${course.slug || course.id}`)
}

const enrollCourse = async (course) => {
  
  const result = await courseStore.enrollInCourse(course.slug)
  if (result.success) {
    // Show success message
    push.success('Successfully enrolled in course!')
  }
}

const createNewCourse = () => {
  router.push('/courses/new')
}

const showLearningPath = () => {
  // Implement learning path creation
  push.info('Learning path feature coming soon!')
}
</script>