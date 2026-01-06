<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <!-- Header with subtle gradient -->
      <div class="mb-10">
        <div class="relative">
          <!-- Subtle decorative background -->
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl"></div>
          
          <div class="relative z-10">
            <!-- Elegant breadcrumb -->
            <div class="mb-6">
              <nav class="flex items-center space-x-2 text-sm text-slate-600">
                <router-link to="/dashboard" class="hover:text-primary transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </router-link>
                <span class="text-slate-400">›</span>
                <router-link to="/courses" class="hover:text-primary transition-colors duration-200">
                  Courses
                </router-link>
                <span class="text-slate-400">›</span>
                <span class="text-primary font-medium">Create Course</span>
              </nav>
            </div>

            <!-- Main header -->
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-4xl font-bold text-slate-800 mb-3 tracking-tight">
                  Create New Course
                </h1>
                <p class="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Share your knowledge with the world. Upload your materials and let students track their learning journey.
                </p>
              </div>
              
              <!-- Floating action indicator -->
              <div class="hidden lg:block">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                  <div class="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-lg">
                    <div class="flex items-center space-x-3">
                      <div class="bg-primary/10 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm font-medium text-slate-700">Quick Start</p>
                        <p class="text-xs text-slate-500">Under 5 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Form -->
        <div class="lg:col-span-2">
          <div class="relative group">
            <!-- Card background with glass effect -->
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-white/50 shadow-xl shadow-slate-200/50"></div>
            
            <!-- Shimmer effect on hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div class="relative p-8">
              <div class="mb-8">
                <div class="inline-flex items-center space-x-3 mb-2">
                  <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold text-slate-800">Course Details</h2>
                </div>
                <p class="text-slate-600">Fill in the essential information about your course</p>
              </div>
              
              <div v-if="courseStore.isLoading" class="text-center py-16">
                <div class="inline-flex flex-col items-center">
                  <div class="relative mb-6">
                    <div class="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                  </div>
                  <p class="text-slate-700 font-medium">Creating your course...</p>
                  <p class="text-sm text-slate-500 mt-2">This will just take a moment</p>
                </div>
              </div>
              
              <form v-else @submit.prevent="submitCourse" class="space-y-8">
                <!-- Title Input -->
                <div class="form-group">
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Course Title <span class="text-rose-500">*</span>
                  </label>
                  <div class="relative">
                    <input type="text" 
                           class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                           v-model="form.title"
                           placeholder="e.g., Mastering Modern JavaScript"
                           required>
                    <div class="absolute right-3 top-3">
                      <div class="text-primary bg-primary/10 p-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2 text-sm text-slate-500">Make it memorable and search-friendly</p>
                </div>

                <!-- Description -->
                <div class="form-group">
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>
                  <div class="relative">
                    <textarea class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                   focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                   placeholder:text-slate-400 text-slate-700 h-40 resize-none
                                   transition-all duration-200" 
                              v-model="form.description"
                              placeholder="What will students learn in this course? What makes it unique?"></textarea>
                    <div class="absolute bottom-3 right-3 text-xs text-slate-400">
                      {{ form.description?.length || 0 }}/500
                    </div>
                  </div>
                  <p class="mt-2 text-sm text-slate-500">Optional, but highly recommended for better engagement</p>
                </div>

                <!-- File Upload - Enhanced -->
                <div class="form-group">
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Course File <span class="text-rose-500">*</span>
                  </label>
                  
                  <div class="relative">
                    <div class="border-2 border-dashed border-slate-300/50 rounded-2xl p-8 text-center transition-all duration-300
                                hover:border-primary/30 hover:bg-white/60"
                         @dragover.prevent="dragOver = true"
                         @dragleave.prevent="dragOver = false"
                         @drop.prevent="handleDrop"
                         :class="{ 'border-primary/50 bg-primary/5': dragOver, 'border-emerald-500/30 bg-emerald-50/50': form.course_file }">
                      
                      <input type="file" 
                             ref="fileInput"
                             class="hidden"
                             accept=".pdf,"
                             @change="handleFileSelect">
                      
                      <div v-if="!form.course_file" class="space-y-6">
                        <!-- Animated upload icon -->
                        <div class="relative inline-flex">
                          <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg"></div>
                          <div class="relative bg-white p-5 rounded-full border border-white/50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                          </div>
                        </div>
                        
                        <div>
                          <h3 class="text-lg font-semibold text-slate-700 mb-2">Upload your course materials</h3>
                          <p class="text-slate-600 mb-4 max-w-md mx-auto">
                            Drag & drop your PDF here, or click to browse
                          </p>
                          
                          <button type="button" 
                                  class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                         text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                         transition-all duration-300 px-8 py-3 rounded-xl font-medium"
                                  @click="$refs.fileInput.click()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Choose File
                          </button>
                          
                          <p class="mt-4 text-sm text-slate-500">
                            Maximum file size: 100MB • Supported: PDF
                          </p>
                        </div>
                      </div>
                      
                      <!-- File Uploaded State -->
                      <div v-else class="space-y-6">
                        <div class="relative max-w-md mx-auto">
                          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 blur-xl rounded-2xl"></div>
                          <div class="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50">
                            <div class="flex items-center space-x-4">
                              <div class="bg-emerald-500/10 p-3 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="font-medium text-slate-800 truncate">{{ form.course_file.name }}</p>
                                <p class="text-sm text-slate-600">{{ formatFileSize(form.course_file.size) }}</p>
                                <div class="mt-2">
                                  <div class="h-1.5 bg-emerald-500/20 rounded-full overflow-hidden">
                                    <div class="h-full bg-emerald-500 rounded-full animate-pulse" style="width: 100%"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <button type="button" 
                                class="btn btn-outline border-slate-300/50 hover:border-slate-400 text-slate-600 
                                       hover:bg-slate-50 px-6 py-2 rounded-xl font-medium transition-all duration-200"
                                @click="removeFile">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove File
                        </button>
                      </div>
                    </div>
                    
                    <!-- File stats -->
                    <div class="mt-6 grid grid-cols-2 gap-4">
                      <div class="bg-white/50 p-4 rounded-xl border border-slate-300/30">
                        <div class="flex items-center space-x-3">
                          <div class="bg-slate-100 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                          </div>
                          <div>
                            <p class="text-sm text-slate-600">Max Size</p>
                            <p class="font-semibold text-slate-800">100 MB</p>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-white/50 p-4 rounded-xl border border-slate-300/30">
                        <div class="flex items-center space-x-3">
                          <div class="bg-slate-100 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <p class="text-sm text-slate-600">Formats</p>
                            <p class="font-semibold text-slate-800">PDF</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Course Settings - Enhanced -->
                <div class="bg-gradient-to-br from-slate-50 to-white/50 rounded-2xl p-6 border border-slate-300/30">
                  <div class="flex items-center space-x-3 mb-6">
                    <div class="bg-gradient-to-br from-slate-800 to-slate-600 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-slate-800">Course Settings</h3>
                  </div>
                  
                  <div class="space-y-5">
                    <!-- Visibility Toggle -->
                    <div class="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                      <div class="flex-1">
                        <p class="font-medium text-slate-800">Make course public</p>
                        <p class="text-sm text-slate-600 mt-1">Anyone can discover and enroll in this course</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" v-model="form.is_public">
                        <div class="w-11 h-6 bg-slate-300/50 peer-focus:outline-none rounded-full peer 
                                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                    after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                    peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80"></div>
                      </label>
                    </div>
                    
                    <!-- Progress Tracking -->
                    <div class="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                      <div class="flex-1">
                        <p class="font-medium text-slate-800">Enable progress tracking</p>
                        <p class="text-sm text-slate-600 mt-1">Students can track their reading progress automatically</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" v-model="form.enable_progress_tracking" :checked="true">
                        <div class="w-11 h-6 bg-slate-300/50 peer-focus:outline-none rounded-full peer 
                                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                    after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                    peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-400"></div>
                      </label>
                    </div>
                    
                    <!-- Comments -->
                    <div class="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                      <div class="flex-1">
                        <p class="font-medium text-slate-800">Allow comments</p>
                        <p class="text-sm text-slate-600 mt-1">Students can discuss and ask questions on course content</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" v-model="form.allow_comments" :checked="true">
                        <div class="w-11 h-6 bg-slate-300/50 peer-focus:outline-none rounded-full peer 
                                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                    after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                    peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-400"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Form Actions -->
                <div class="flex justify-end space-x-4 pt-8 border-t border-slate-300/30">
                  <router-link to="/courses" 
                             class="btn bg-white/80 backdrop-blur-sm border border-slate-300/50 hover:border-slate-400 
                                    text-slate-700 hover:bg-white px-8 py-3 rounded-xl font-medium
                                    transition-all duration-200 hover:shadow-lg">
                    Cancel
                  </router-link>
                  <button type="submit" 
                          class="btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30 
                                 px-10 py-3 rounded-xl font-medium transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                          :disabled="!formValid || submitting">
                    <span v-if="submitting" class="flex items-center">
                      <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </span>
                    <span v-else class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Create Course
                    </span>
                  </button>
                </div>
              </form>
              
              <!-- Error Display -->
              <div v-if="courseStore.error" class="mt-8">
                <div class="bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200 rounded-2xl p-6">
                  <div class="flex items-start space-x-3">
                    <div class="bg-rose-500/10 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="font-medium text-rose-800">Unable to create course</p>
                      <p class="text-rose-700 mt-1">{{ courseStore.error }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Tips & Preview -->
        <div class="space-y-8">
          <!-- Tips Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl 
                        border border-blue-200/30 shadow-lg shadow-blue-100/50"></div>
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Pro Tips</h3>
              </div>
              
              <div class="space-y-5">
                <div class="flex items-start space-x-3 p-3 bg-white/60 rounded-xl border border-white/50">
                  <div class="bg-emerald-500/10 p-2 rounded-lg flex-shrink-0">
                    <span class="text-emerald-600 font-bold">1</span>
                  </div>
                  <div>
                    <p class="font-medium text-slate-800">Clear Structure</p>
                    <p class="text-sm text-slate-600 mt-1">Divide content into logical sections for better navigation</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3 p-3 bg-white/60 rounded-xl border border-white/50">
                  <div class="bg-blue-500/10 p-2 rounded-lg flex-shrink-0">
                    <span class="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <p class="font-medium text-slate-800">Engaging Content</p>
                    <p class="text-sm text-slate-600 mt-1">Include real-world examples and practical exercises</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3 p-3 bg-white/60 rounded-xl border border-white/50">
                  <div class="bg-purple-500/10 p-2 rounded-lg flex-shrink-0">
                    <span class="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <p class="font-medium text-slate-800">Time Estimates</p>
                    <p class="text-sm text-slate-600 mt-1">Help students plan with realistic time expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-white/80 rounded-2xl 
                        border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-slate-700 to-slate-600 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Course Preview</h3>
              </div>
              
              <div class="space-y-5">
                <div v-if="form.title" class="bg-white/80 p-5 rounded-xl border border-slate-300/50">
                  <div class="flex items-start space-x-3 mb-3">
                    <div class="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-slate-800 text-lg">{{ form.title }}</h4>
                      <p v-if="form.description" class="text-sm text-slate-600 mt-2 line-clamp-2">
                        {{ form.description }}
                      </p>
                      <p v-else class="text-sm text-slate-400 italic mt-2">No description added yet</p>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-slate-100/50 p-8 rounded-xl border border-slate-300/30 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-slate-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p class="text-slate-500">Start adding course details to see preview</p>
                </div>
                
                <!-- Status Indicators -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white/80 p-4 rounded-xl border border-slate-300/50">
                    <p class="text-sm text-slate-600 mb-1">Status</p>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 rounded-full" :class="form.is_public ? 'bg-emerald-500' : 'bg-amber-500'"></div>
                      <p class="font-semibold" :class="form.is_public ? 'text-emerald-600' : 'text-amber-600'">
                        {{ form.is_public ? 'Public' : 'Private' }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="bg-white/80 p-4 rounded-xl border border-slate-300/50">
                    <p class="text-sm text-slate-600 mb-1">File Status</p>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 rounded-full" :class="form.course_file ? 'bg-emerald-500' : 'bg-slate-400'"></div>
                      <p class="font-semibold" :class="form.course_file ? 'text-emerald-600' : 'text-slate-600'">
                        {{ form.course_file ? 'Ready' : 'Pending' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-50 to-white/80 rounded-2xl 
                        border border-slate-300/50 shadow-lg shadow-slate-200/50"></div>
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-amber-500 to-amber-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Need Help?</h3>
              </div>
              
              <div class="space-y-3">
                <button class="w-full flex items-center justify-between p-3 bg-white/60 rounded-xl border border-slate-300/50 
                              hover:bg-white hover:border-slate-400/50 transition-all duration-200 group">
                  <div class="flex items-center space-x-3">
                    <div class="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span class="font-medium text-slate-700">View Documentation</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button class="w-full flex items-center justify-between p-3 bg-white/60 rounded-xl border border-slate-300/50 
                              hover:bg-white hover:border-slate-400/50 transition-all duration-200 group">
                  <div class="flex items-center space-x-3">
                    <div class="bg-emerald-500/10 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span class="font-medium text-slate-700">Download Template</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button class="w-full flex items-center justify-between p-3 bg-white/60 rounded-xl border border-slate-300/50 
                              hover:bg-white hover:border-slate-400/50 transition-all duration-200 group">
                  <div class="flex items-center space-x-3">
                    <div class="bg-purple-500/10 p-2 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span class="font-medium text-slate-700">Contact Support</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/courseStore'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'
const router = useRouter()
const courseStore = useCourseStore()

const form = ref({
  title: '',
  description: '',
  course_file: null,
  is_public: false,
  enable_progress_tracking: true,
  allow_comments: true
})

const dragOver = ref(false)
const submitting = ref(false)

const formValid = computed(() => {
  return form.value.title.trim() !== '' && form.value.course_file
})

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    validateAndSetFile(file)
  }
}

const handleDrop = (event) => {
  dragOver.value = false
  const file = event.dataTransfer.files[0]
  if (file) {
    validateAndSetFile(file)
  }
}

const validateAndSetFile = (file) => {
  // Check file type
  const validTypes = ['application/pdf']
  if (!validTypes.includes(file.type)) {
    push.warning('Please upload a PDF')
    return
  }

  // Check file size (100MB)
  if (file.size > 100 * 1024 * 1024) {
    push.warning('File size must be less than 100MB')
    return
  }
  
  form.value.course_file = file
}

const removeFile = () => {
  form.value.course_file = null
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const submitCourse = async () => {
  if (!formValid.value) return
  
  submitting.value = true
  
  const result = await courseStore.createCourse(form.value)
  
  if (result.success) {
    // Show success message
    push.success('Course created successfully!')
    
    // Redirect to the new course
    router.push(`/course/${result.data.slug}`)
  }
  
  submitting.value = false
}
</script>