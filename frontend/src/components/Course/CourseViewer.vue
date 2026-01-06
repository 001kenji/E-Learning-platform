<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <!-- Course Header -->
      <div class="mb-10">
        <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
          <!-- Course Info -->
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
                <span class="text-primary font-medium">{{ course?.title || 'Loading...' }}</span>
              </nav>
            </div>

            <!-- Course Title -->
            <h1 class="text-4xl font-bold text-slate-800 mb-6 tracking-tight">
              {{ course?.title || 'Loading Course...' }}
            </h1>

            <!-- Instructor & Metadata -->
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                  <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full 
                              flex items-center justify-center text-white font-bold text-lg">
                    {{ course?.creator?.first_name?.charAt(0) || 'U' }}
                  </div>
                </div>
                <div>
                  <p class="font-semibold text-slate-800">{{ course?.creator?.username || 'Unknown' }}</p>
                  <p class="text-sm text-slate-600">Instructor</p>
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
                    <p class="text-sm text-slate-600">Total Time</p>
                    <p class="font-semibold text-slate-800">{{ Math.ceil((course?.total_pages || 0) * 5) }} min</p>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <div class="bg-slate-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-600">Total Pages</p>
                    <p class="font-semibold text-slate-800">{{ course?.total_pages || 0 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Progress Stats Card -->
          <div class="relative group w-fit max-w-md w-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6 w-full lg:w-80">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Your Progress</h3>
              </div>

              <!-- Circular Progress -->
              <div class="flex justify-center mb-6">
                <div class="relative w-32 h-32">
                  <svg class="w-full h-full" viewBox="0 0 100 100">
                    <!-- Background circle -->
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" stroke-width="8" />
                    <!-- Progress circle -->
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" 
                            :stroke-dasharray="`${progressPercentage * 2.827} 282.7`" 
                            stroke-width="8" stroke-linecap="round" transform="rotate(-90 50 50)" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#3b82f6" />
                        <stop offset="100%" stop-color="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-3xl font-bold text-slate-800">{{ Math.round(progressPercentage) }}%</span>
                    <span class="text-sm text-slate-600">Complete</span>
                  </div>
                </div>
              </div>

              <!-- Progress Details -->
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-600">Current Page</span>
                  <span class="font-bold text-slate-800">{{ currentPage }}/{{ course?.total_pages || 0 }}</span>
                </div>
                
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-600">Time Spent</span>
                  <span class="font-bold text-slate-800">{{ formatTime(spentTime) }}</span>
                </div>
                
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-600">Est. Time Left</span>
                  <span class="font-bold text-slate-800">{{ formatTime(estimatedTimeLeft) }}</span>
                </div>
              </div>

              <!-- Action Button -->
              <div class="mt-8">
                <button v-if="!isEnrolled" 
                        @click="enrollCourse"
                        class="w-full btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                               text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                               py-3 rounded-xl font-medium transition-all duration-300">
                  Enroll Now
                </button>
                <button v-else 
                        @click="markAsComplete"
                        :disabled="isCompleted"
                        class="w-full btn bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300
                               text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30
                               py-3 rounded-xl font-medium transition-all duration-300
                               disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ isCompleted ? 'Completed 🎉' : 'Mark as Complete' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Left Sidebar: Navigation -->
        <div class="lg:col-span-1">
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-slate-800 to-slate-700 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Course Content</h3>
              </div>

              <!-- Lessons List -->
              <div class="space-y-2 mb-8">
                <div v-for="lesson in course?.lessons || []" :key="lesson.id" 
                     @click="goToPage(lesson.page_number)"
                     class="p-3 rounded-xl cursor-pointer transition-all duration-200"
                     :class="lesson.page_number === currentPage 
                       ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary' 
                       : 'hover:bg-slate-100 border-l-4 border-transparent'">
                  <div class="flex items-center justify-between">
                    <div class="flex-1">
                      <div class="flex items-center space-x-2 mb-1">
                        <p class="font-medium text-slate-800">{{ lesson.title }}</p>
                        <span v-if="lesson.page_number <= currentPage" class="text-emerald-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div class="flex items-center space-x-3 text-sm">
                        <span class="text-slate-600">Page {{ lesson.page_number }}</span>
                        <span class="text-slate-500">•</span>
                        <span class="text-slate-500">{{ lesson.estimated_duration }}m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Table of Contents -->
              <div class="border-t border-slate-300/50 pt-6">
                <h4 class="font-medium text-slate-800 mb-4">Table of Contents</h4>
                <div class="space-y-2">
                  <div v-for="i in Math.ceil((course?.total_pages || 0) / 20)" :key="i" 
                       @click="goToPage((i - 1) * 20 + 1)"
                       class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 
                              cursor-pointer transition-colors duration-200">
                    <span class="text-sm text-slate-700">
                      Pages {{ (i - 1) * 20 + 1 }} - {{ Math.min(i * 20, course?.total_pages || 0) }}
                    </span>
                    <span class="text-xs text-slate-500 px-2 py-1 bg-slate-200 rounded">
                      {{ Math.min(20, (course?.total_pages || 0) - (i - 1) * 20) }} pages
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content: Document Viewer -->
        <div class="lg:col-span-3 space-y-8">
          <!-- Document Viewer -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <!-- Viewer Controls -->
              <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <div class="flex items-center space-x-4">
                  <button @click="prevPage" 
                          :disabled="currentPage <= 1"
                          class="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm 
                                 border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                                 text-slate-700 hover:text-slate-800 disabled:opacity-50 
                                 disabled:cursor-not-allowed transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span class="font-medium">Previous</span>
                  </button>
                  
                  <div class="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-2.5 
                            rounded-xl border border-slate-300/50">
                    <span class="font-medium text-slate-700">Page</span>
                    <input type="number" 
                           class="w-16 bg-transparent border-none outline-none text-center 
                                  font-bold text-slate-800"
                           v-model="currentPage" 
                           min="1" 
                           :max="course?.total_pages || 1"
                           @change="goToPage(currentPage)">
                    <span class="text-slate-600">of {{ course?.total_pages || 0 }}</span>
                  </div>
                  
                  <button @click="nextPage" 
                          :disabled="currentPage >= (course?.total_pages || 1)"
                          class="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm 
                                 border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                                 text-slate-700 hover:text-slate-800 disabled:opacity-50 
                                 disabled:cursor-not-allowed transition-all duration-200">
                    <span class="font-medium">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div class="flex items-center space-x-2">
                  <button @click="toggleBookmark" 
                          class="p-2.5 rounded-xl border border-slate-300/50 hover:border-slate-400/50 
                                 bg-white/80 backdrop-blur-sm transition-all duration-200"
                          :class="{ 'text-primary border-primary/30 bg-primary/5': isBookmarked }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                  
                  <div class="relative group/dropdown">
                    <button class="p-2.5 rounded-xl border border-slate-300/50 hover:border-slate-400/50 
                                   bg-white/80 backdrop-blur-sm transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    
                    <div class="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm 
                                border border-slate-300/50 rounded-xl shadow-xl shadow-slate-200/50 
                                opacity-0 invisible group-hover/dropdown:opacity-100 
                                group-hover/dropdown:visible transition-all duration-200 z-10">
                      <div class="py-2">
                        <button @click="saveNote" 
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span class="font-medium text-slate-700">Add Note to This Page</span>
                        </button>
                        
                        <button @click="downloadCourse" 
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span class="font-medium text-slate-700">Download Course</span>
                        </button>
                        
                        <button @click="reportIssue" 
                                class="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors duration-150
                                       flex items-center space-x-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span class="font-medium text-slate-700">Report Issue</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Document Display Area -->
              <!-- Document Display Area -->
            <div class="border-2 border-slate-300/50 rounded-2xl p-4 md:p-6 min-h-[600px] 
                        flex flex-col items-center justify-center bg-white/80">
              
              <!-- Loading State -->
              <div v-if="isLoadingDocument" class="flex flex-col items-center justify-center p-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p class="text-slate-600">Loading document...</p>
              </div>
              
              <!-- PDF Viewer -->
              <div v-else-if="currentDocumentType === 'pdf' && pdfSource" class="w-full h-full overflow-auto">
                <div class="flex justify-end items-center mb-4 space-x-4">
                  <!-- Zoom Controls -->
                  <div class="flex items-center space-x-2">
                    <button @click="zoomOut" 
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <span class="text-sm text-slate-700">{{ Math.round(scale * 100) }}%</span>
                    <button @click="zoomIn" 
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- PDF Embed Component -->
                <div class="border border-slate-300 rounded-lg overflow-hidden shadow-lg">
                  <vue-pdf-embed
                    :source="pdfSource"
                    :page="currentPage"
                    :scale="scale"
                    @password-requested="handlePasswordRequest"
                    @rendered="handlePdfRendered"
                    @error="handlePdfError"
                    class="w-full"
                    style="min-height: 500px;"
                  />
                </div>
                
                <!-- PDF Page Info -->
                <div class="flex justify-between items-center mt-4 text-sm text-slate-600">
                  <span>PDF Page {{ currentPage }} of {{ pageCount }}</span>
                  <span>{{ course?.file_name || 'document.pdf' }}</span>
                </div>
              </div>
              
              <!-- DOCX Viewer with Pagination -->
              <div v-else-if="currentDocumentType === 'docx' && docxPages.length > 0" 
                  class="w-full h-full overflow-auto">
                
                <!-- Viewer Controls (same as PDF) -->
                <div class="flex justify-end items-center mb-4 space-x-4">
                  <div class="flex items-center space-x-2">
                    <button @click="zoomOut" 
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <span class="text-sm text-slate-700">{{ Math.round(scale * 100) }}%</span>
                    <button @click="zoomIn" 
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  <!-- DOCX Page Navigation -->
                  <div class="flex items-center space-x-2">
                    <button @click="prevDocxPage" 
                            :disabled="currentDocxPage <= 1"
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div class="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-2.5 
                                rounded-xl border border-slate-300/50">
                      <span class="font-medium text-slate-700">Page</span>
                      <input type="number" 
                            class="w-16 bg-transparent border-none outline-none text-center 
                                    font-bold text-slate-800"
                            v-model="currentDocxPage" 
                            min="1" 
                            :max="docxTotalPages"
                            @change="goToDocxPage(currentDocxPage)">
                      <span class="text-slate-600">of {{ docxTotalPages }}</span>
                    </div>
                    
                    <button @click="nextDocxPage" 
                            :disabled="currentDocxPage >= docxTotalPages"
                            class="p-2 rounded-lg border border-slate-300 hover:border-slate-400 
                                  bg-white text-slate-700 disabled:opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- DOCX Content Area -->
                <div class="border border-slate-300 rounded-lg overflow-hidden shadow-lg bg-white">
                  <div class="prose prose-lg max-w-none mx-auto p-2 min-h-[500px] overflow-auto">
                    <div v-html="docxContent" class="docx-content text-black" :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }"></div>
                  </div>
                </div>
                
                <!-- DOCX Page Info -->
                <div class="flex justify-between items-center mt-4 text-sm text-slate-600">
                  <span>DOCX Page {{ currentDocxPage }} of {{ docxTotalPages }}</span>
                  <span>{{ course?.file_name || 'document.docx' }}</span>
                </div>
              </div>
              
              <!-- Fallback / Unsupported Format -->
              <div v-else class="text-center max-w-2xl p-8">
                <div class="relative inline-flex mb-8">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Page {{ currentPage }}</h3>
                <p class="text-lg text-slate-600 mb-8">
                  {{ course?.file_type === 'pdf' ? 'PDF Document' : 'DOCX Document' }} • 
                  {{ course?.total_pages || 0 }} pages total
                </p>
                
                <p class="text-slate-500 mb-4">
                  {{ course?.file_type === 'pdf' ? 
                    'Install PDF.js library to view PDF documents.' : 
                    'Install Mammoth.js library to view DOCX documents.' }}
                </p>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 
                            rounded-2xl p-6 text-left max-w-md mx-auto">
                  <div class="flex items-start space-x-3">
                    <div class="bg-blue-500/10 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-blue-800 mb-1">Setup Required</p>
                      <p class="text-sm text-blue-700">
                        Run: <code class="bg-blue-100 px-2 py-1 rounded">npm install pdfjs-dist vue-pdf-embed</code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <!-- Page Navigation -->
              <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-8 
                          border-t border-slate-300/50">
                <button @click="prevPage" 
                        :disabled="currentPage <= 1"
                        class="flex items-center space-x-2 px-6 py-3 bg-white/80 backdrop-blur-sm 
                               border border-slate-300/50 rounded-xl hover:border-slate-400/50 
                               text-slate-700 hover:text-slate-800 disabled:opacity-50 
                               disabled:cursor-not-allowed transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span class="font-medium">Previous Page</span>
                </button>
                
                <div class="text-center">
                  <p class="text-sm text-slate-600">Progress saved automatically</p>
                  <p class="text-xs text-slate-500">Keep going! You're doing great 🚀</p>
                </div>
                
                <button @click="nextPage" 
                        :disabled="currentPage >= (course?.total_pages || 1)"
                        class="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 
                               hover:from-primary/90 hover:to-primary/70 text-white border-0 
                               rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30
                               transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  <span class="font-medium">Next Page</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Notes Section -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-amber-500 to-amber-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">My Notes</h3>
              </div>

              <!-- Note Input -->
              <div class="mb-6">
                <textarea v-model="currentNote"
                          @blur="saveNote"
                          placeholder="Add your notes for this page..."
                          class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                 placeholder:text-slate-400 text-slate-700 h-40 resize-none
                                 transition-all duration-200"></textarea>
                <div class="flex justify-between items-center mt-3">
                  <p class="text-sm text-slate-500">Your notes are saved automatically</p>
                  <button @click="saveNote" 
                          class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                 text-white border-0 px-6 py-2 rounded-xl font-medium transition-all duration-300">
                    Save Note
                  </button>
                </div>
              </div>

              <!-- Previous Notes -->
              <div v-if="notes.length > 0">
                <h4 class="font-medium text-slate-800 mb-4">Previous Notes</h4>
                <div class="space-y-4">
                  <div v-for="(note, index) in notes.slice(0, 3)" :key="index" 
                       class="p-4 bg-gradient-to-br from-slate-50 to-white/50 rounded-xl 
                              border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                    <div class="flex justify-between items-start mb-3">
                      <div class="flex items-center space-x-2">
                        <span class="text-sm font-medium text-slate-800">Page {{ note.page }}</span>
                        <span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          Note
                        </span>
                      </div>
                      <span class="text-xs text-slate-500">{{ formatDate(note.timestamp) }}</span>
                    </div>
                    <p class="text-sm text-slate-700">{{ note.content }}</p>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <p class="text-slate-600">No notes yet. Start by adding a note above!</p>
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
import { ref, computed, onMounted, watch ,onBeforeUnmount} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/courseStore'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'
// Add these imports
import VuePdfEmbed from 'vue-pdf-embed'
// If using Mammoth for DOCX
import * as mammoth from 'mammoth'
const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()

const courseSlug = route.params.slug
const currentPage = ref(1)
const currentNote = ref('')
const pageTime = ref(0)
const startTime = ref(Date.now())

const course = computed(() => courseStore.currentCourse)
const enrollment = computed(() => courseStore.currentEnrollment)
const isEnrolled = computed(() => !!enrollment.value)
const isCompleted = computed(() => enrollment.value?.completed_at != null)

// DOCX pagination state
const docxTotalPages = ref(0)
const currentDocxPage = ref(1)
const docxPages = ref([])
const itemsPerPage = 50 // Adjust based on content density (lines per page)

// Register components
// Register component
components: {
  VuePdfEmbed,
  Navbar,
  Footer
}

// Add these state variables
const pdfSource = ref('')
const isPdfLoaded = ref(false)
const pageCount = ref(0)
const scale = ref(1.5)
const docxContent = ref('')
const isLoadingDocument = ref(false)
const currentDocumentType = ref('')


const progressPercentage = computed(() => {
  if (!enrollment.value || !course.value) return 0
  return Math.min(100, (enrollment.value.current_page / course.value.total_pages) * 100)
})

const isBookmarked = computed(() => {
  if (!enrollment.value) return false
  return enrollment.value.bookmarked_pages?.includes(currentPage.value) || false
})

// Add these methods
const loadDocument = async () => {
  if (!course.value || !course.value.file_url) {
    push.error('Document URL not available')
    return
  }
  
  isLoadingDocument.value = true
  currentDocumentType.value = course.value.file_type || 'pdf'
  
  try {
    const token = localStorage.getItem('access_token')
    const response = await fetch(course.value.file_url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch document: ${response.status}`)
    }
    
    if (currentDocumentType.value === 'pdf') {
      const blob = await response.blob()
      pdfSource.value = URL.createObjectURL(blob)
    } else if (currentDocumentType.value === 'docx') {
      const arrayBuffer = await response.arrayBuffer()
      const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
      
      // Split content into pages
      const htmlContent = result.value
      const lines = htmlContent.split(/(?=<[^>]+>|\n)/g)
      
      // Group lines into pages
      const pages = []
      let currentPage = []
      let lineCount = 0
      
      for (let line of lines) {
        currentPage.push(line)
        lineCount++
        
        // Check if we need to start a new page
        if (lineCount >= itemsPerPage || line.includes('</p>') || line.includes('</div>')) {
          if (lineCount >= itemsPerPage || (line.includes('</p>') && Math.random() > 0.7)) {
            pages.push(currentPage.join(''))
            currentPage = []
            lineCount = 0
          }
        }
      }
      
      // Add last page if it has content
      if (currentPage.length > 0) {
        pages.push(currentPage.join(''))
      }
      
      docxPages.value = pages
      docxTotalPages.value = pages.length
      currentDocxPage.value = 1
      docxContent.value = pages[0] || 'No content'
    } else {
      push.error('Unsupported document format')
    }
  } catch (error) {
    console.error('Error loading document:', error)
    push.error(`Failed to load document: ${error.message}`)
  } finally {
    isLoadingDocument.value = false
  }
}

// DOCX Pagination Methods
const goToDocxPage = (page) => {
  const pageNum = parseInt(page)
  if (pageNum >= 1 && pageNum <= docxTotalPages.value) {
    currentDocxPage.value = pageNum
    docxContent.value = docxPages.value[pageNum - 1] || ''
  }
}

const prevDocxPage = () => {
  if (currentDocxPage.value > 1) {
    currentDocxPage.value--
    docxContent.value = docxPages.value[currentDocxPage.value - 1] || ''
  }
}

const nextDocxPage = () => {
  if (currentDocxPage.value < docxTotalPages.value) {
    currentDocxPage.value++
    docxContent.value = docxPages.value[currentDocxPage.value - 1] || ''
  }
}

const zoomIn = () => {
  if (scale.value < 3) {
    scale.value += 0.25
  }
}

const zoomOut = () => {
  if (scale.value > 0.5) {
    scale.value -= 0.25
  }
}

const handlePdfRendered = () => {
  isPdfLoaded.value = true
}

const handlePdfError = (error) => {
  console.error('PDF Error:', error)
  push.error('Failed to render PDF document')
}

const handlePasswordRequest = (callback, retry) => {
  // Handle password protected PDFs
  const password = prompt('This PDF is password protected. Please enter the password:')
  if (password) {
    callback(password)
  }
}

// Clean up object URLs on unmount
onBeforeUnmount(() => {
  if (pdfSource.value) {
    URL.revokeObjectURL(pdfSource.value)
  }
})

const notes = computed(() => {
  if (!enrollment.value?.notes || typeof enrollment.value.notes !== 'object') return []
  
  // Convert notes object to array
  return Object.entries(enrollment.value.notes).map(([page, content]) => ({
    page: parseInt(page),
    content: content,
    timestamp: Date.now() // Note: You might want to store timestamps in Django model
  })).sort((a, b) => b.page - a.page) // Sort by page number descending
})

const spentTime = computed(() => {
  return enrollment.value?.time_spent || 0
})

const estimatedTimeLeft = computed(() => {
  if (!course.value) return 0
  const remainingPages = course.value.total_pages - currentPage.value
  return remainingPages * 5 * 60 // 5 minutes per page in seconds
})

const lastUpdated = computed(() => {
  return new Date().toLocaleTimeString()
})

onMounted(async () => {
  await courseStore.fetchCourseDetails(courseSlug)
  if (enrollment.value) {
    currentPage.value = enrollment.value.current_page || 1
  }
  
  // Load the document when course is available
  if (course.value) {
    await loadDocument()
  }
  
  // Start tracking time on this page
  startTime.value = Date.now()
  
  // Auto-save progress every 30 seconds
  setInterval(updateProgress, 30000)
})

// Watch for course changes
watch(() => course.value, async (newCourse) => {
  if (newCourse) {
    await loadDocument()
  }
})

// Update pageCount when PDF loads
watch(() => isPdfLoaded.value, (loaded) => {
  if (loaded && currentDocumentType.value === 'pdf') {
    // You might need to get page count from PDF.js
    // This would require additional implementation
  }
})

watch(currentPage, async (newPage) => {
  if (isEnrolled.value) {
    const timeSpent = Math.floor((Date.now() - startTime.value) / 1000)
    startTime.value = Date.now()
    
    await courseStore.updateProgress(enrollment.value.id, newPage, timeSpent,enrollment.value.course.slug)
  }
})

// Watch for page changes to sync with overall progress for docx
watch(currentDocxPage, (newPage) => {
  // You might want to sync this with your main currentPage
  currentPage.value = newPage
  
  // Update the displayed content
  if (docxPages.value.length > 0 && newPage >= 1 && newPage <= docxPages.value.length) {
    docxContent.value = docxPages.value[newPage - 1]
  }

})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (course.value && currentPage.value < course.value.total_pages) {
    currentPage.value++
  }
}

const goToPage = (page) => {
  const pageNum = parseInt(page)
  if (pageNum >= 1 && pageNum <= course.value.total_pages) {
    currentPage.value = pageNum
  }
}

const updateProgress = async () => {
  if (isEnrolled.value && currentPage.value) {
    const timeSpent = Math.floor((Date.now() - startTime.value) / 1000)
    // console.log(enrollment.value.course.slug)
    await courseStore.updateProgress(enrollment.value.id, currentPage.value, timeSpent,enrollment.value.course.slug)
  }
}

const enrollCourse = async () => {
 
  const result = await courseStore.enrollInCourse(course.value.slug)
  if (result.success) {
    currentPage.value = 1
    push.success('Enrolled in course successfully!')
    // Save initial progress
    await updateProgress()
  }
}

const toggleBookmark = async () => {
  if (!isEnrolled.value) return
  
  const result = await courseStore.updateProgress(enrollment.value.id, currentPage.value, 0,enrollment.value.course.slug)
  // In a real implementation, you would have a separate endpoint for bookmarks
}

const saveNote = async () => {
  if (currentNote.value.trim() && enrollment.value?.id && currentPage.value) {
    try {
      // Save note using the store
      const result = await courseStore.addNote(
        enrollment.value.id,
        currentPage.value,
        currentNote.value.trim()
      )
      
      if (result.success) {
        // Show success message
        push.success('Note saved successfully!')
        // Clear the textarea
        currentNote.value = ''
        
        // Refresh the enrollment data to get updated notes
        await courseStore.fetchUserEnrollments()
      } else {
        push.error(result.error?.detail || 'Failed to save note')
      }
    } catch (error) {
      push.error('An error occurred while saving note')
      console.error('Save note error:', error)
    }
  }else if(!isEnrolled.value){
    push.warning('You need to be enrolled to save notes')
  } else {
    push.warning('Please enter a note to save')
  }
}

const markAsComplete = async () => {
  if (isEnrolled.value && !isCompleted.value) {
    // Mark course as complete
    goToPage(course.value.total_pages)
  }
}

const downloadCourse = async () => {
  try {
    if (!course.value || !course.value.file_url) {
      push.error('No file available for download')
      return
    }
    
    push.info('Preparing download...')
    
    const token = localStorage.getItem('access_token')
    
    // Fetch the file
    const response = await fetch(course.value.file_url, {
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
    const fileName = course.value.file_name || 
                     `${course.value.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${course.value.file_type || 'pdf'}`
    
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

const reportIssue = () => {
  push.info('Report issue feature coming soon!')
}

const formatTime = (seconds) => {
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}m ${remainingSeconds}s`
}

const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString()
}
</script>


<style scoped>
/* Add these styles */
.pdf-container {
  height: 600px;
  overflow: auto;
}

.zoom-controls {
  position: sticky;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.docx-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
}

/* Ensure PDF pages are centered */
:deep(.vue-pdf-embed) {
  margin: 0 auto;
}

:deep(.vue-pdf-embed .textLayer) {
  opacity: 0.2;
}

:deep(.vue-pdf-embed .annotationLayer) {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
/*for docx css*/
.docx-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  min-height: 500px;
  transition: transform 0.2s ease;
}

.docx-content h1 { 
  font-size: 2em; 
  margin-top: 1em; 
  margin-bottom: 0.5em; 
  page-break-after: avoid;
}

.docx-content h2 { 
  font-size: 1.5em; 
  margin-top: 1em; 
  margin-bottom: 0.5em; 
  page-break-after: avoid;
}

.docx-content p { 
  margin-bottom: 1em; 
  line-height: 1.6; 
  page-break-inside: avoid;
}

.docx-content ul, .docx-content ol { 
  margin-left: 2em; 
  margin-bottom: 1em; 
  page-break-inside: avoid;
}

.docx-content table { 
  border-collapse: collapse; 
  margin-bottom: 1em; 
  page-break-inside: avoid;
}

.docx-content td, .docx-content th { 
  border: 1px solid #ddd; 
  padding: 8px; 
}

/* Better page break handling */
.docx-content .page-break {
  page-break-before: always;
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px dashed #e2e8f0;
}
</style>