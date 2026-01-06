<template>
  <nav class="navbar bg-gradient-to-br  top-1 rounded-md w-[99%] mx-auto from-slate-900 to-slate-800 border-b border-slate-700/50 
              backdrop-blur-xl bg-opacity-90 sticky top-0 z-50 shadow-2xl shadow-slate-900/30">
    <div class="container mx-auto  flex flex-row items-center justify-around w-full">
      <!-- nav start -->
      <div class="navbar-start">
        <!-- Mobile menu button -->
        <div class="dropdown ">
          <label tabindex="0" class="btn btn-ghost lg:hidden p-3 hover:bg-slate-800/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content ring-2 ring-slate-500 mt-3 z-[1] p-4 shadow-2xl 
                             bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 
                             rounded-2xl w-64 space-y-1">
            <li>
              <router-link to="/dashboard" 
                         class="text-slate-300 hover:text-white hover:bg-slate-300/50 rounded-xl 
                                px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/courses" 
                         class="text-slate-300 hover:text-white hover:bg-slate-300/50 rounded-xl 
                                px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Browse Courses
              </router-link>
            </li>
            <li>
              <router-link to="/my-courses" 
                         class="text-slate-300 hover:text-white hover:bg-slate-300/50 rounded-xl 
                                px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                My Courses
              </router-link>
            </li>
            <li v-if="authStore.user?.is_admin">
              <router-link to="/admin" 
                         class="text-amber-300 hover:text-amber-200 hover:bg-amber-900/20 rounded-xl 
                                px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Admin Panel
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Logo/Brand -->
        <router-link to="/dashboard" class="flex items-center space-x-3 hover:opacity-90 transition-all duration-300">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl rounded-xl"></div>
            <div class="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg 
                        flex items-center justify-center text-white font-bold text-lg shadow-lg">
              EP
            </div>
          </div>
          <div>
            <h1 class="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              EduLearn<span class="font-extrabold text-primary">Pro</span>
            </h1>
            <span class="text-xs text-slate-400 font-medium">Advanced Learning</span>
          </div>
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal space-x-1">
          <li>
            <router-link to="/dashboard" 
                       class="px-5 py-3 text-slate-300 hover:text-white hover:bg-slate-300/50 
                              rounded-xl transition-all duration-300 font-medium 
                              flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/courses" 
                       class="px-5 py-3 text-slate-300 hover:text-white hover:bg-slate-300/50
                              rounded-xl transition-all duration-300 font-medium 
                              flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Browse Courses</span>
            </router-link>
          </li>
          <li>
            <router-link to="/my-courses" 
                       class="px-5 py-3 text-slate-300 hover:text-white hover:bg-slate-300/50
                              rounded-xl transition-all duration-300 font-medium 
                              flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>My Courses</span>
            </router-link>
          </li>
          <li v-if="authStore.user?.is_admin">
            <router-link to="/admin" 
                       class="px-5 py-3 text-amber-300 hover:text-amber-200 hover:bg-amber-900/20 
                              rounded-xl transition-all duration-300 font-medium 
                              flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Admin Panel</span>
            </router-link>
          </li>
        </ul>
      </div>
      
      <!-- Right side: User avatar and dropdown -->
      <div class="navbar-end flex items-center space-x-2 sm:space-x-4">
        <!-- Notifications -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" 
                 class="btn btn-ghost btn-circle p-3 hover:bg-slate-800/50 transition-all duration-300 group">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors duration-300" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item shadow-lg" 
                    v-if="hasNotifications">
                {{ notificationsCount }}
              </span>
            </div>
          </label>
          <div tabindex="0" 
               class="mt-3 z-[1] card card-compact ring-2 ring-slate-500  dropdown-content w-60 sm:w-80  bg-gradient-to-br from-slate-800 to-slate-900 
                      border border-slate-700/50 shadow-2xl shadow-slate-900/50 rounded-2xl">
            <div class="card-body p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-white">Notifications</h3>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                  {{ notificationsCount }} new
                </span>
              </div>
              <div class="divider my-2 bg-slate-700/50"></div>
              <div v-if="notifications.length > 0" class="max-h-96 overflow-y-auto space-y-3">
                <div v-for="notification in notifications" :key="notification.id" 
                     class="p-3 hover:bg-slate-700/30 rounded-xl cursor-pointer transition-all duration-300 
                            border border-transparent hover:border-slate-700/50">
                  <p class="text-sm text-slate-300">{{ notification.message }}</p>
                  <span class="text-xs text-slate-500 mt-1">{{ formatTime(notification.time) }}</span>
                </div>
              </div>
              <p v-else class="text-sm text-slate-500 text-center py-4">No notifications</p>
              <div class="divider my-2 bg-slate-700/50"></div>
              <button class="btn btn-sm btn-ghost text-primary hover:bg-primary/10 w-full">
                Mark all as read
              </button>
            </div>
          </div>
        </div>
        
        <!-- User dropdown -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" 
                 class="btn btn-ghost btn-circle p-0 hover:opacity-90 transition-all duration-300 group">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-lg rounded-full"></div>
              <div class="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary 
                          rounded-full flex items-center justify-center text-white font-bold text-lg
                          border-2 border-slate-800 shadow-lg">
                {{ userInitial }}
              </div>
            </div>
          </label>
          <ul tabindex="0" 
              class="mt-3 z-[1] ring-2 ring-slate-500 p-4 shadow-2xl menu menu-sm dropdown-content 
                     bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 
                     rounded-2xl w-72 space-y-1">
            <li class="px-4 pt-3 pb-4">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
                  <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary 
                              rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {{ userInitial }}
                  </div>
                </div>
                <div>
                  <p class="font-bold text-white text-sm">{{ authStore.fullName }}</p>
                  <p class="text-xs text-slate-400 truncate">{{ authStore.userEmail }}</p>
                </div>
              </div>
            </li>
            <div class="divider my-1 bg-slate-700/50"></div>
            <li>
              <router-link to="/profile" 
                         class="text-slate-300 hover:text-white hover:bg-slate-700/50 
                                rounded-xl px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
                <span class="badge badge-sm badge-primary">New</span>
              </router-link>
            </li>
            <li>
              <a @click="HandleLogout" 
                 class="text-slate-300 hover:text-white hover:bg-slate-700/50 
                        rounded-xl px-4 py-3 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { useAuthStore } from '../../stores/authStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const userouter = useRouter()
const userInitial = computed(() => {
  if (authStore.user?.first_name) {
    return authStore.user.first_name.charAt(0).toUpperCase()
  }else if(authStore.userEmail){
    return authStore.userEmail.charAt(0).toUpperCase()
  }else{
    return '😁'
  }
})

// Mock notifications (replace with real data)
const notifications = ref([
  { id: 1, message: 'You completed "Advanced Vue.js" course!', time: '2 hours ago' },
  { id: 2, message: 'New course "Django REST Framework" available', time: '1 day ago' }
])

const notificationsCount = computed(() => notifications.value.length)
const hasNotifications = computed(() => notificationsCount.value > 0)
function HandleLogout() {
  userouter.push('/login')
  authStore.logout()
}
const formatTime = (time) => time // In real app, format timestamp
</script>