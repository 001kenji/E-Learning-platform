<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-slate-50">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex flex-row flex-wrap justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduLearn<span class="font-extrabold text-blue-700">Pro</span>
            </span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300">Features</a>
            <a href="#how-it-works" class="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300">How It Works</a>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/login" class="px-6 py-2.5 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
              Sign In
            </router-link>
            <router-link to="/register" class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-medium rounded-xl hover:shadow-lg shadow-md shadow-blue-200 transition-all duration-300">
              Get Started Free
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-20 pb-32 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div>
              <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                🚀 Next-Gen Learning Platform
              </span>
              <h1 class="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Learning Journey with 
                <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Interactive Courses</span>
              </h1>
              <p class="text-xl text-slate-600 mb-8 leading-relaxed">
                EduLearn Pro is a modern, feature-rich online learning platform that provides an interactive environment for course creators and learners to share knowledge, track progress, and achieve educational goals.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/register" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1 text-center">
                Start Journey
              </router-link>
              <a href="#features" class="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 text-center">
                Explore Features
              </a>
            </div>
            <div class="flex items-center space-x-6 pt-4">
              <div class="flex items-center">
                <div class="flex -space-x-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full border-2 border-white flex items-center justify-center">
                    <span class="font-bold text-blue-600 text-sm">JD</span>
                  </div>
                  <div class="w-10 h-10 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full border-2 border-white flex items-center justify-center">
                    <span class="font-bold text-indigo-600 text-sm">SM</span>
                  </div>
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full border-2 border-white flex items-center justify-center">
                    <span class="font-bold text-purple-600 text-sm">AR</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="font-semibold text-slate-800">Join 50,000+ learners</p>
                  <p class="text-sm text-slate-600">From 150+ countries</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-slate-200/50 shadow-2xl shadow-blue-100/50 p-8">
              <div class="space-y-6">
                <div class="p-6 rounded-2xl bg-gradient-to-r from-white to-blue-50/50 border border-blue-100">
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-slate-800">Secure & Encrypted</h3>
                      <p class="text-sm text-slate-600">JWT-based authentication</p>
                    </div>
                  </div>
                </div>
                <div class="p-6 rounded-2xl bg-gradient-to-r from-white to-indigo-50/50 border border-indigo-100">
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-slate-800">Progress Tracking</h3>
                      <p class="text-sm text-slate-600">Real-time analytics dashboard</p>
                    </div>
                  </div>
                </div>
                <div class="p-6 rounded-2xl bg-gradient-to-r from-white to-purple-50/50 border border-purple-100">
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-slate-800">500+ Courses</h3>
                      <p class="text-sm text-slate-600">Expert-led content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 px-6 bg-gradient-to-b from-white to-slate-50/50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            ✨ Key Features
          </span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Why Choose EduLearn Pro?</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Modern learning platform with cutting-edge features for both learners and educators</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-100/50 p-8 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Advanced Progress Tracking</h3>
            <p class="text-slate-600 mb-6">Real-time tracking with detailed analytics, completion rates, and learning patterns visualization.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Page-by-page progress tracking
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Time spent analytics
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Completion certificates
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-100/50 p-8 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300">
            <div class="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Interactive Document Processing</h3>
            <p class="text-slate-600 mb-6">Support for PDF and DOCX formats with automatic page counting, metadata extraction, and parsing.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                PDF & DOCX support
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Automatic page counting
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Real-time parsing
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/50 shadow-xl shadow-slate-100/50 p-8 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-300">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Secure Authentication</h3>
            <p class="text-slate-600 mb-6">JWT-based authentication with token refresh, secure file uploads, and protected routes.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                JWT authentication
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Token refresh system
              </li>
              <li class="flex items-center text-sm text-slate-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Secure file uploads
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            🚀 How It Works
          </span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Simple Learning Process</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">From course enrollment to completion, we've streamlined the learning experience</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div class="text-center p-8">
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 blur-xl rounded-full"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Browse & Enroll</h3>
            <p class="text-slate-600">Discover courses across various topics and enroll with one click</p>
          </div>

          <div class="text-center p-8">
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-100 blur-xl rounded-full"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Track Progress</h3>
            <p class="text-slate-600">Automatically track reading progress through PDF/DOCX documents</p>
          </div>

          <div class="text-center p-8">
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 blur-xl rounded-full"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Interactive Learning</h3>
            <p class="text-slate-600">Bookmark pages, take notes, and visualize learning progress</p>
          </div>

          <div class="text-center p-8">
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-100 blur-xl rounded-full"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-4">Earn Certificates</h3>
            <p class="text-slate-600">Get industry-recognized certificates upon course completion</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-20 px-6 bg-gradient-to-b from-slate-50/50 to-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
            💻 Tech Stack
          </span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Built With Modern Technologies</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Cutting-edge technologies for optimal performance and user experience</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-green-600">Vue</span>
            </div>
            <h3 class="font-semibold text-slate-800">Vue.js 3</h3>
            <p class="text-sm text-slate-600 mt-2">Progressive JavaScript Framework</p>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">DRF</span>
            </div>
            <h3 class="font-semibold text-slate-800">Django REST</h3>
            <p class="text-sm text-slate-600 mt-2">Robust API Backend</p>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-cyan-600">TW</span>
            </div>
            <h3 class="font-semibold text-slate-800">Tailwind CSS</h3>
            <p class="text-sm text-slate-600 mt-2">Utility-first CSS Framework</p>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/50 p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-indigo-600">PSQL</span>
            </div>
            <h3 class="font-semibold text-slate-800">PostgreSQL</h3>
            <p class="text-sm text-slate-600 mt-2">Relational Database</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl shadow-blue-200/50 p-12 text-center overflow-hidden">
          <div class="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
          <div class="relative z-10">
            <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join thousands of learners who have transformed their skills with EduLearn Pro</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link to="/register" class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Journey
              </router-link>
              <router-link to="/login" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Sign In
              </router-link>
            </div>
            <p class="text-blue-100 text-sm mt-8">No credit card required • fully free</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-6 border-t border-slate-200">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-3 mb-6 md:mb-0">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduLearn<span class="font-extrabold text-blue-700">Pro</span>
            </span>
          </div>
          <div class="text-center md:text-right">
            <p class="text-slate-600 mb-2">© {{ new Date().getFullYear() }} EduLearn Pro. All rights reserved.</p>
            <p class="text-sm text-slate-500">Empowering learners worldwide through innovative education</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.bg-grid-white\/10 {
  background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Animation for cards */
.hover\:shadow-2xl {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradient text animation */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>