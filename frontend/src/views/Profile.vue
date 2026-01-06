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
                <span class="text-primary font-medium">My Profile</span>
              </nav>
            </div>

            <!-- Page Title -->
            <h1 class="text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              Profile Settings
            </h1>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl">
              Manage your account settings, personal information, and learning preferences
            </p>

            <!-- Member Info -->
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                  <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full 
                              flex items-center justify-center text-white font-bold text-lg">
                    {{ userInitial }}
                  </div>
                </div>
                <div>
                  <p class="font-semibold text-slate-800">{{ authStore.fullName }}</p>
                  <p class="text-sm text-slate-600">{{ authStore.userEmail }}</p>
                </div>
              </div>

              <div class="hidden lg:block h-8 w-px bg-slate-300/50"></div>

              <div class="flex items-center space-x-6">
                <div class="flex items-center space-x-2">
                  <div class="bg-slate-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-600">Member Since</p>
                    <p class="font-semibold text-slate-800">{{ memberSince }}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <div class="bg-slate-100 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-600">Days Active</p>
                    <p class="font-semibold text-slate-800">{{ daysActive }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Status Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6 w-full lg:w-64">
              <div class="flex items-center space-x-3 mb-6">
                <div class="bg-gradient-to-br from-emerald-500 to-emerald-400 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-800">Account Status</h3>
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600">Status</span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 text-emerald-600 border border-emerald-500/20">
                    Active
                  </span>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600">Email</span>
                  <span :class="authStore.user?.email_verified 
                          ? 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 text-emerald-600 border border-emerald-500/20'
                          : 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/10 to-amber-400/10 text-amber-600 border border-amber-500/20'">
                    {{ authStore.user?.email_verified ? 'Verified' : 'Pending' }}
                  </span>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-sm text-slate-600">Role</span>
                  <span :class="userTypeBadgeClass" class=" inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-sky-500/10 to-sky-400/10 text-sky-600 border border-sky-500/20">
                    {{ userTypeLabel }}
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <router-link to="/dashboard" 
                            class="w-full px-4 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                                   border border-primary/20 text-primary rounded-xl font-medium transition-all duration-200 text-center block">
                  View Dashboard
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Profile & Stats -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Profile Card -->
          <div class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <!-- Avatar -->
              <div class="flex flex-col items-center mb-8">
                <div class="relative mb-6">
                  <div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary 
                              flex items-center justify-center text-white text-4xl font-bold">
                    {{ userInitial }}
                  </div>
                  <label class="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg 
                                cursor-pointer hover:bg-slate-100 transition-all duration-200 border border-slate-300/50">
                    <input type="file" class="hidden" @change="handleAvatarChange">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                </div>
                
                <h2 class="text-2xl font-bold text-slate-800 mb-2">{{ authStore.fullName }}</h2>
                <p class="text-slate-600 mb-4">{{ authStore.userEmail }}</p>
                
                <div class="mb-6">
                  <span :class="userTypeBadgeClass" class=" inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-sky-500/10 to-sky-400/10 text-sky-600 border border-sky-500/20">
                    {{ userTypeLabel }}
                  </span>
                </div>
              </div>
              
              <!-- User Info -->
              <div class="space-y-4 mb-6">
                <div class="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div class="flex items-center gap-3">
                    <div class="p-1.5 bg-slate-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span class="text-sm text-slate-600">Joined</span>
                  </div>
                  <span class="font-medium text-slate-800">{{ formatDate(authStore.user?.created_at) }}</span>
                </div>
              </div>
              
              <!-- Bio -->
              <div>
                <div class="flex items-center justify-between mb-3">
                  <h3 class="font-medium text-slate-800">Bio</h3>
                  <button @click="editBio"
                          class="text-sm px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                                 border border-primary/20 text-primary rounded-lg font-medium transition-all duration-200">
                    {{ bio ? 'Edit' : 'Add' }} Bio
                  </button>
                </div>
                <div class="p-4 bg-gradient-to-br from-slate-50 to-white/50 rounded-xl border border-slate-300/30 min-h-[80px]">
                  <p class="text-slate-700" v-if="bio">
                    {{ bio }}
                  </p>
                  <p v-else class="text-slate-500 italic">{{ profileForm.bio }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning Stats -->
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
                <h3 class="text-xl font-semibold text-slate-800">Learning Statistics</h3>
              </div>
              
              <div class="space-y-6">
                <!-- Total Courses -->
                <div class="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div class="flex items-center gap-3">
                    <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-slate-600">Total Courses</p>
                      <p class="text-xl font-bold text-slate-800">{{ stats.total_courses || 0 }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Completed -->
                <div class="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div class="flex items-center gap-3">
                    <div class="bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-slate-600">Completed</p>
                      <p class="text-xl font-bold text-slate-800">{{ stats.completed_courses || 0 }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Time Spent -->
                <div class="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div class="flex items-center gap-3">
                    <div class="bg-gradient-to-br from-amber-500/10 to-amber-400/5 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-slate-600">Time Spent</p>
                      <p class="text-xl font-bold text-slate-800">{{ formatTime(stats.total_time_spent_seconds || 0) }}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Average Progress -->
                <div class="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div class="flex items-center gap-3">
                    <div class="bg-gradient-to-br from-blue-500/10 to-blue-400/5 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-slate-600">Avg. Progress</p>
                      <p class="text-xl font-bold text-slate-800">{{ averageProgress }}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Settings & Activity -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Settings Tabs -->
          <div class="relative">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-1">
              <div class="flex space-x-1">
                <button @click="activeTab = 'personal'" 
                        class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                        :class="activeTab === 'personal' 
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                          : 'hover:bg-slate-100 text-slate-700'">
                  <div class="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Personal Info</span>
                  </div>
                </button>
                
                <button @click="activeTab = 'preferences'" 
                        class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                        :class="activeTab === 'preferences' 
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                          : 'hover:bg-slate-100 text-slate-700'">
                  <div class="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Preferences</span>
                  </div>
                </button>
                
                <button @click="activeTab = 'security'" 
                        class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                        :class="activeTab === 'security' 
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                          : 'hover:bg-slate-100 text-slate-700'">
                  <div class="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Security</span>
                  </div>
                </button>
                
                <button @click="activeTab = 'notifications'" 
                        class="flex-1 px-6 py-3 rounded-xl text-center transition-all duration-200"
                        :class="activeTab === 'notifications' 
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary font-medium' 
                          : 'hover:bg-slate-100 text-slate-700'">
                  <div class="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span>Notifications</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Content Tabs -->
          <div v-if="activeTab === 'personal'" class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-8">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Personal Information</h3>
              </div>
              
              <form @submit.prevent="updateProfile" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- First Name -->
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input type="text" 
                           class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                           v-model="profileForm.first_name"
                           :placeholder="authStore.user?.first_name || 'Enter first name'">
                  </div>
                  
                  <!-- Last Name -->
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input type="text" 
                           class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                           v-model="profileForm.last_name"
                           :placeholder="authStore.user?.last_name || 'Enter last name'">
                  </div>
                  
                  <!-- Username -->
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Username
                    </label>
                    <input type="text" 
                           class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                           v-model="profileForm.username"
                           :placeholder="authStore.user?.username || 'Enter username'"
                           required>
                  </div>
                  
                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input type="email" 
                           class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                           v-model="profileForm.email"
                           :placeholder="authStore.userEmail"
                           required>
                  </div>
                </div>
                
                <!-- Bio -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Bio
                  </label>
                  <textarea class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  placeholder:text-slate-400 text-slate-700 h-32 resize-none transition-all duration-200" 
                            v-model="profileForm.bio"
                            placeholder="Tell us about yourself..."></textarea>
                </div>
                
                <!-- Email Notifications -->
                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div>
                    <p class="font-medium text-slate-800">Email Notifications</p>
                    <p class="text-sm text-slate-600 mt-1">Receive email updates about your courses</p>
                  </div>
                  <div class="relative">
                    <input type="checkbox" 
                           class="sr-only peer"
                           v-model="profileForm.email_notifications"
                           id="email-notifications">
                    <label for="email-notifications" 
                           class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                  peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                  transition-colors duration-200">
                      <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                   peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <!-- Form Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t border-slate-300/50">
                  <button type="button" 
                          @click="resetForm"
                          class="px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                                 border border-slate-300/50 text-slate-700 rounded-xl font-medium transition-all duration-200">
                    Cancel
                  </button>
                  <button type="submit" 
                          class="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="inline-flex items-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                    <span v-else>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Preferences Tab -->
          <div v-else-if="activeTab === 'preferences'" class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-8">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Learning Preferences</h3>
              </div>
              
              <div class="space-y-6">
                <!-- Theme -->
                <div class="space-y-3">
                  <label class="block text-sm font-medium text-slate-700">
                    Theme
                  </label>
                  <div class="flex flex-wrap gap-3">
                    <button @click="theme = 'light'"
                            class="px-4 py-2.5 rounded-xl border transition-all duration-200"
                            :class="theme === 'light' 
                              ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary font-medium' 
                              : 'bg-white/50 border-slate-300/50 text-slate-700 hover:border-slate-400/50'">
                      Light
                    </button>
                    <button @click="theme = 'dark'"
                            class="px-4 py-2.5 rounded-xl border transition-all duration-200"
                            :class="theme === 'dark' 
                              ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary font-medium' 
                              : 'bg-white/50 border-slate-300/50 text-slate-700 hover:border-slate-400/50'">
                      Dark
                    </button>
                    <button @click="theme = 'auto'"
                            class="px-4 py-2.5 rounded-xl border transition-all duration-200"
                            :class="theme === 'auto' 
                              ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 text-primary font-medium' 
                              : 'bg-white/50 border-slate-300/50 text-slate-700 hover:border-slate-400/50'">
                      Auto
                    </button>
                  </div>
                </div>
                
                <!-- Language -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Language
                  </label>
                  <select class="w-full max-w-xs px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                  focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                  text-slate-700 transition-all duration-200">
                    <option selected>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                
                <!-- Reading Speed -->
                <div class="space-y-3">
                  <div class="flex justify-between items-center">
                    <label class="block text-sm font-medium text-slate-700">
                      Reading Speed
                    </label>
                    <span class="text-sm font-medium text-primary">{{ readingSpeed }} words/min</span>
                  </div>
                  <input type="range" 
                         min="100" 
                         max="500" 
                         step="50"
                         class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-primary/80"
                         v-model="readingSpeed">
                  <div class="flex justify-between text-xs text-slate-600 px-1">
                    <span>Slow</span>
                    <span>Medium</span>
                    <span>Fast</span>
                  </div>
                </div>
                
                <!-- Auto-save -->
                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div>
                    <p class="font-medium text-slate-800">Auto-save Progress</p>
                    <p class="text-sm text-slate-600 mt-1">Automatically save progress every 30 seconds</p>
                  </div>
                  <div class="relative">
                    <input type="checkbox" 
                           class="sr-only peer"
                           v-model="autoSave"
                           id="auto-save">
                    <label for="auto-save" 
                           class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                  peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                  transition-colors duration-200">
                      <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                   peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <!-- Show Progress -->
                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div>
                    <p class="font-medium text-slate-800">Show Progress Percentage</p>
                    <p class="text-sm text-slate-600 mt-1">Display progress percentage in course view</p>
                  </div>
                  <div class="relative">
                    <input type="checkbox" 
                           class="sr-only peer"
                           v-model="showProgress"
                           id="show-progress">
                    <label for="show-progress" 
                           class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                  peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                  transition-colors duration-200">
                      <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                   peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <!-- Save Button -->
                <div class="flex justify-end pt-6 border-t border-slate-300/50">
                  <button @click="savePreferences"
                          class="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                 rounded-xl font-medium transition-all duration-300">
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Security Tab -->
          <div v-else-if="activeTab === 'security'" class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-8">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Security Settings</h3>
              </div>
              
              <div class="space-y-8">
                <!-- Change Password -->
                <div class="space-y-6">
                  <h4 class="text-lg font-medium text-slate-800 mb-2">Change Password</h4>
                  
                  <form @submit.prevent="changePassword" class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <input type="password" 
                             class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                    focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                    placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                             v-model="passwordForm.current_password"
                             required>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                          New Password
                        </label>
                        <input type="password" 
                               class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                      focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                      placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                               v-model="passwordForm.new_password"
                               required>
                      </div>
                      
                      <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">
                          Confirm Password
                        </label>
                        <input type="password" 
                               class="w-full px-4 py-3 bg-white/50 border border-slate-300/50 rounded-xl 
                                      focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-white
                                      placeholder:text-slate-400 text-slate-700 transition-all duration-200"
                               v-model="passwordForm.confirm_password"
                               required>
                      </div>
                    </div>
                    
                    <!-- Password Match Indicator -->
                    <div v-if="passwordForm.new_password && passwordForm.confirm_password" 
                         class="flex items-center gap-2 text-sm">
                      <svg v-if="passwordsMatch" 
                           xmlns="http://www.w3.org/2000/svg" 
                           class="h-4 w-4 text-emerald-500" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <svg v-else 
                           xmlns="http://www.w3.org/2000/svg" 
                           class="h-4 w-4 text-amber-500" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span :class="passwordsMatch ? 'text-emerald-600' : 'text-amber-600'">
                        {{ passwordsMatch ? 'Passwords match' : 'Passwords do not match' }}
                      </span>
                    </div>
                    
                    <div class="flex justify-end pt-4">
                      <button type="submit" 
                              class="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                     text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                     rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                              :disabled="!passwordsMatch">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
                
                <!-- Two-Factor Authentication -->
                <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                  <div>
                    <p class="font-medium text-slate-800">Two-Factor Authentication</p>
                    <p class="text-sm text-slate-600 mt-1">Add an extra layer of security to your account</p>
                  </div>
                  <button @click="toggleTwoFactor"
                          class="px-4 py-2 rounded-xl font-medium transition-all duration-200"
                          :class="twoFactorEnabled 
                            ? 'bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 border border-slate-300/50 text-red-600' 
                            : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30'">
                    {{ twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA' }}
                  </button>
                </div>
                
                <!-- Session Management -->
                <div class="space-y-4">
                  <h4 class="text-lg font-medium text-slate-800">Active Sessions</h4>
                  
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div class="flex items-center gap-3">
                        <div class="p-1.5 bg-emerald-500/10 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p class="font-medium text-slate-800">Current Session</p>
                          <p class="text-sm text-slate-600">Chrome on Windows • Just now</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div class="flex items-center gap-3">
                        <div class="p-1.5 bg-slate-100 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p class="font-medium text-slate-800">Mobile Session</p>
                          <p class="text-sm text-slate-600">Safari on iPhone • 2 hours ago</p>
                        </div>
                      </div>
                      <button @click="logoutSession"
                              class="px-3 py-1.5 text-sm bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                                     border border-slate-300/50 text-red-600 rounded-lg font-medium transition-all duration-200">
                        Logout
                      </button>
                    </div>
                  </div>
                  
                  <div class="flex justify-end pt-4">
                    <button @click="logoutAllSessions"
                            class="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                                   border border-slate-300/50 text-red-600 rounded-xl font-medium transition-all duration-200">
                      Logout All Other Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications Tab -->
          <div v-else-if="activeTab === 'notifications'" class="relative group">
            <div class="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl 
                        border border-slate-300/50 shadow-xl shadow-slate-200/50"></div>
            
            <div class="relative p-6">
              <div class="flex items-center space-x-3 mb-8">
                <div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-800">Notification Preferences</h3>
              </div>
              
              <div class="space-y-8">
                <!-- Email Notifications -->
                <div class="space-y-4">
                  <h4 class="text-lg font-medium text-slate-800">Email Notifications</h4>
                  
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div>
                        <p class="font-medium text-slate-800">Course Updates</p>
                        <p class="text-sm text-slate-600 mt-1">Get notified when courses you're enrolled in are updated</p>
                      </div>
                      <div class="relative">
                        <input type="checkbox" 
                               class="sr-only peer"
                               v-model="notifications.course_updates"
                               id="course-updates">
                        <label for="course-updates" 
                               class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                      peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                      transition-colors duration-200">
                          <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                       peer-checked:translate-x-6"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div>
                        <p class="font-medium text-slate-800">New Courses</p>
                        <p class="text-sm text-slate-600 mt-1">Be notified when new courses matching your interests are available</p>
                      </div>
                      <div class="relative">
                        <input type="checkbox" 
                               class="sr-only peer"
                               v-model="notifications.new_courses"
                               id="new-courses">
                        <label for="new-courses" 
                               class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                      peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                      transition-colors duration-200">
                          <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                       peer-checked:translate-x-6"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div>
                        <p class="font-medium text-slate-800">Progress Reminders</p>
                        <p class="text-sm text-slate-600 mt-1">Receive reminders to continue your learning journey</p>
                      </div>
                      <div class="relative">
                        <input type="checkbox" 
                               class="sr-only peer"
                               v-model="notifications.progress_reminders"
                               id="progress-reminders">
                        <label for="progress-reminders" 
                               class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                      peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                      transition-colors duration-200">
                          <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                       peer-checked:translate-x-6"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- In-App Notifications -->
                <div class="space-y-4">
                  <h4 class="text-lg font-medium text-slate-800">In-App Notifications</h4>
                  
                  <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div>
                        <p class="font-medium text-slate-800">Achievements</p>
                        <p class="text-sm text-slate-600 mt-1">Show notifications when you earn achievements</p>
                      </div>
                      <div class="relative">
                        <input type="checkbox" 
                               class="sr-only peer"
                               v-model="notifications.achievements"
                               id="achievements">
                        <label for="achievements" 
                               class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                      peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                      transition-colors duration-200">
                          <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                       peer-checked:translate-x-6"></span>
                        </label>
                      </div>
                    </div>
                    
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl border border-slate-300/30">
                      <div>
                        <p class="font-medium text-slate-800">Sound Effects</p>
                        <p class="text-sm text-slate-600 mt-1">Play sounds for notifications and achievements</p>
                      </div>
                      <div class="relative">
                        <input type="checkbox" 
                               class="sr-only peer"
                               v-model="notifications.sound_effects"
                               id="sound-effects">
                        <label for="sound-effects" 
                               class="relative w-12 h-6 bg-slate-300/50 rounded-full cursor-pointer 
                                      peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary/80
                                      transition-colors duration-200">
                          <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 
                                       peer-checked:translate-x-6"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Save Button -->
                <div class="flex justify-end pt-6 border-t border-slate-300/50">
                  <button @click="saveNotificationSettings"
                          class="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                                 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/30
                                 rounded-xl font-medium transition-all duration-300">
                    Save Notification Settings
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
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
                <h3 class="text-xl font-semibold text-slate-800">Recent Activity</h3>
              </div>
              
              <div class="space-y-4">
                <div v-for="activity in recentActivity" :key="activity.id" 
                     class="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-white/50 rounded-xl 
                            border border-slate-300/30 hover:border-slate-400/50 transition-all duration-200">
                  <!-- Activity Icon -->
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-xl"></div>
                    <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl 
                                flex items-center justify-center text-white">
                      <span class="text-sm font-medium">{{ activityIcon(activity.type) }}</span>
                    </div>
                  </div>
                  
                  <!-- Activity Details -->
                  <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                      <p class="font-medium text-slate-800">{{ activity.title }}</p>
                      <span class="text-xs text-slate-500">{{ formatTimeAgo(activity.timestamp) }}</span>
                    </div>
                    <p class="text-sm text-slate-600">{{ activity.description }}</p>
                  </div>
                  
                  <!-- View Button -->
                  <div v-if="activity.link" class="flex-shrink-0">
                    <button @click="goToActivity(activity)"
                            class="px-3 py-1.5 text-sm bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 
                                   border border-primary/20 text-primary rounded-lg font-medium transition-all duration-200">
                      View
                    </button>
                  </div>
                </div>
                
                <!-- Empty State -->
                <div v-if="recentActivity.length === 0" class="text-center py-12">
                  <div class="relative inline-flex mb-4">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-lg rounded-full"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p class="text-slate-600">No recent activity</p>
                </div>
              </div>
              
              <!-- View All Button -->
              <div class="flex justify-center mt-6 pt-6 border-t border-slate-300/50">
                <button @click="viewAllActivity"
                        class="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 
                               border border-slate-300/50 text-slate-700 rounded-xl font-medium transition-all duration-200">
                  View All Activity
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useCourseStore } from '@/stores/courseStore'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
import { Notivue, Notification, push } from 'notivue'

const router = useRouter()
const authStore = useAuthStore()
const courseStore = useCourseStore()

const activeTab = ref('personal')
const isSubmitting = ref(false)
const theme = ref('light')
const readingSpeed = ref(250)
const autoSave = ref(true)
const showProgress = ref(true)
const twoFactorEnabled = ref(false)

const profileForm = ref({
  first_name: authStore.user?.first_name || '',
  last_name: authStore.user?.last_name || '',
  username: authStore.user?.username || '',
  email: authStore.user?.email || '',
  bio: authStore.user?.bio || '',
  email_notifications: true
})

const passwordForm = ref({
  current_password: '',
  new_password: '',
  confirm_password: ''
})

const notifications = ref({
  course_updates: true,
  new_courses: true,
  progress_reminders: true,
  achievements: true,
  sound_effects: false
})

const recentActivity = ref([])

onMounted(async () => {
  await courseStore.fetchDashboardStats()
  // Initialize form with current user data
  profileForm.value = {
    first_name: authStore.user?.first_name || '',
    last_name: authStore.user?.last_name || '',
    username: authStore.user?.username || '',
    email: authStore.user?.email || '',
    bio: bio.value,
    email_notifications: true
  }
})

const userInitial = computed(() => {
  if (authStore.user?.first_name) {
    return authStore.user.first_name.charAt(0).toUpperCase()
  }
  return authStore.userEmail.charAt(0).toUpperCase()
})

const userTypeLabel = computed(() => {
  if (authStore.user?.is_admin) return 'Administrator'
  if (authStore.user?.user_type === 'moderator') return 'Moderator'
  return 'Learner'
})

const userTypeBadgeClass = computed(() => {
  if (authStore.user?.is_admin) return 'badge-warning'
  if (authStore.user?.user_type === 'moderator') return 'badge-info'
  return 'badge-primary'
})

const memberSince = computed(() => {
  if (!authStore.user?.date_joined) return 'N/A'
  const date = new Date(authStore.user.date_joined)
  return date.toLocaleDateString('default', { month: 'long', year: 'numeric' })
})

const daysActive = computed(() => {
  if (!authStore.user?.date_joined) return 0
  const joined = new Date(authStore.user.date_joined)
  const now = new Date()
  const diffTime = Math.abs(now - joined)
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
})

const stats = computed(() => courseStore.dashboardStats || {})

const averageProgress = computed(() => {
  if (!stats.value?.courses_in_progress?.length) return 0
  const total = stats.value.courses_in_progress.reduce((sum, course) => sum + course.progress_percent, 0)
  return Math.round(total / stats.value.courses_in_progress.length)
})

const passwordsMatch = computed(() => {
  return passwordForm.value.new_password === passwordForm.value.confirm_password
})

const handleAvatarChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Implement avatar upload
    push.info('Avatar upload feature coming soon!')
  }
}

const editBio = () => {
  const newBio = prompt('Enter your bio:', bio.value)
  if (newBio !== null) {
    bio.value = newBio
  }
}

const updateProfile = async () => {
  isSubmitting.value = true
  
  try {
    // Prepare update data (only send changed fields)
    const updateData = {}
    
    if (profileForm.value.first_name !== authStore.user?.first_name) {
      updateData.first_name = profileForm.value.first_name
    }
    if (profileForm.value.last_name !== authStore.user?.last_name) {
      updateData.last_name = profileForm.value.last_name
    }
    if (profileForm.value.username !== authStore.user?.username) {
      updateData.username = profileForm.value.username
    }
    if (profileForm.value.email !== authStore.user?.email) {
      updateData.email = profileForm.value.email
    }
    if (profileForm.value.bio !== bio.value) {
      updateData.bio = profileForm.value.bio
    }
    
    // If nothing changed, show message and return
    if (Object.keys(updateData).length === 0) {
      push.info('No changes to save')
      return
    }
    
    // Call API to update profile
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users/me/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify(updateData)
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.detail || JSON.stringify(errorData))
    }
    
    const updatedProfile = await response.json()
    
    // Update local store
    authStore.user = { ...authStore.user, ...updatedProfile }
    authStore.profile = updatedProfile
    
    // Update bio in component state
    bio.value = updatedProfile.bio || profileForm.value.bio
    
    // Update form with new values
    profileForm.value = {
      first_name: updatedProfile.first_name || '',
      last_name: updatedProfile.last_name || '',
      username: updatedProfile.username || '',
      email: updatedProfile.email || '',
      bio: updatedProfile.bio || '',
      email_notifications: profileForm.value.email_notifications
    }
    
    push.success('Profile updated successfully!')
    
  } catch (error) {
    console.error('Profile update error:', error)
    
    // Handle specific error cases
    if (error.message.includes('username')) {
      push.error('Username already exists. Please choose another.')
    } else if (error.message.includes('email')) {
      push.error('Email already in use. Please use a different email.')
    } else {
      push.error('Failed to update profile: ' + error.message)
    }
    
    // Refresh user profile to get latest data
    await authStore.fetchUserProfile()
    
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  profileForm.value = {
    first_name: authStore.user?.first_name || '',
    last_name: authStore.user?.last_name || '',
    username: authStore.user?.username || '',
    email: authStore.user?.email || '',
    bio: bio.value,
    email_notifications: true
  }
}

const changePassword = async () => {
  if (!passwordsMatch.value) {
    push.warning('Passwords do not match!')
    return
  }
  
  try {
    // Prepare password change data
    const passwordData = {
      current_password: passwordForm.value.current_password,
      new_password: passwordForm.value.new_password,
      re_new_password: passwordForm.value.confirm_password
    }
    
    // Call API to change password
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users/set_password/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify(passwordData)
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      
      // Handle specific error cases
      if (errorData.current_password) {
        throw new Error(`Current password: ${errorData.current_password.join(', ')}`)
      } else if (errorData.new_password) {
        throw new Error(`New password: ${errorData.new_password.join(', ')}`)
      } else if (errorData.non_field_errors) {
        throw new Error(errorData.non_field_errors.join(', '))
      } else {
        throw new Error('Failed to change password')
      }
    }
    
    // Success response
    //if response status code is 204 No Content, password change was successful
    if (response.status === 204) {
      push.success('Password changed successfully!')
    }
    
    // Clear form
    passwordForm.value = {
      current_password: '',
      new_password: '',
      confirm_password: ''
    }
    
    // Optional: Logout user and force re-login with new password
    // authStore.logout()
    // router.push('/login')
    
  } catch (error) {
    console.error('Password change error:', error)
    
    // User-friendly error messages
    if (error.message.includes('current password')) {
      push.error('Current password is incorrect')
    } else if (error.message.includes('too short')) {
      push.error('Password must be at least 8 characters long')
    } else if (error.message.includes('too common')) {
      push.error('Password is too common. Please choose a stronger password.')
    } else if (error.message.includes('numeric')) {
      push.error('Password cannot be entirely numeric')
    } else {
      push.error('Failed to change password: ' + error.message)
    }
  }
}

const toggleTwoFactor = () => {
  twoFactorEnabled.value = !twoFactorEnabled.value
  push.info(`Two-factor authentication ${twoFactorEnabled.value ? 'enabled' : 'disabled'}`)
}

const logoutSession = () => {
  // Implement session logout
  push.info('Session logout feature coming soon!')
}

const logoutAllSessions = () => {
  if (confirm('Are you sure you want to logout from all other devices?')) {
    // Implement logout all sessions
    push.info('Logout all sessions feature coming soon!')
  }
}

const savePreferences = () => {
  // Save preferences to localStorage or API
  localStorage.setItem('theme', theme.value)
  localStorage.setItem('readingSpeed', readingSpeed.value)
  localStorage.setItem('autoSave', autoSave.value)
  localStorage.setItem('showProgress', showProgress.value)
  push.success('Preferences saved!')
}

const saveNotificationSettings = () => {
  // Save notification settings to localStorage or API
  localStorage.setItem('notifications', JSON.stringify(notifications.value))
  push.success('Notification settings saved!')
}

const activityIcon = (type) => {
  switch (type) {
    case 'course_completed': return '✓'
    case 'enrolled': return '📚'
    case 'bookmark': return '🔖'
    default: return '📝'
  }
}

const activityIconClass = (type) => {
  switch (type) {
    case 'course_completed': return 'bg-success text-success-content'
    case 'enrolled': return 'bg-primary text-primary-content'
    case 'bookmark': return 'bg-secondary text-secondary-content'
    default: return 'bg-info text-info-content'
  }
}

const goToActivity = (activity) => {
  if (activity.link) {
    router.push(activity.link)
  }
}

const viewAllActivity = () => {
  // Navigate to activity log page
  push.info('Activity log feature coming soon!')
}

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

const formatTime = (seconds) => {
  if (!seconds) return '0m'
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  if (hours > 0) {
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }
  return `${minutes}m`
}

const formatTimeAgo = (timestamp) => {
  const now = new Date()
  const diffMs = now - timestamp
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays > 0) return `${diffDays} days ago`
  if (diffHours > 0) return `${diffHours} hours ago`
  if (diffMins > 0) return `${diffMins} minutes ago`
  return 'Just now'
}
</script>