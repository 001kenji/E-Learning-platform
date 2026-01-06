
<script setup>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    // import { handleLogin } from '../actions/requests.vue'
    import { useAuthStore } from '../../stores/authStore' 
    import { Notivue, Notification, push } from 'notivue'
    const router = useRouter()
    const Activeform = ref('login')
    const authStore = useAuthStore()
    const SubmitLogin = async (formData) => {
    // Handle login logic here
    
    console.log('Login form submitted:', formData)
    // You would typically make an API call here
    await authStore.login(formData)
        .then((result) => {
            if (result.success) {
                console.log('Login successful:', result)
                push.success('Login successful!')
                // Redirect to dashboard or another page
                router.push('/dashboard')
            } else {
                console.error('Login failed:', result.error)
                // Show error message to user
                push.error(`Login failed: ${result.error}`)
            }
        })
        .catch((error) => {
            console.error('An unexpected error occurred during login:', error)
            push.error('An unexpected error occurred. Please try again later.')
        })
    }

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-3000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-1500"></div>
    </div>

    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Top Navigation -->
      <div class="flex flex-row flex-wrap gap-2 justify-between items-center mb-12">
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
        <div class="text-sm ml-auto sm:ml-0 text-slate-600">
          Don't have an account? 
          <router-link to="/register" class="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Sign up free →
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Side - Platform Info -->
        <div class="relative max-w-2xl mx-auto lg:mx-0">
          <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-2xl shadow-blue-100/50 p-8 h-full">
            <!-- Decorative Card Border -->
            <div class="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-blue-100/50 to-indigo-100/50 -m-1"></div>
            
            <div class="relative">
              <!-- Platform Header -->
              <div class="text-center mb-10">
                <div class="relative inline-block mb-6">
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 blur-xl rounded-full"></div>
                  <div class="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                </div>
                <h1 class="text-3xl font-bold text-slate-800 mb-2">Welcome to EduLearn Pro</h1>
                <p class="text-slate-600 text-lg">Transform your learning journey with interactive courses</p>
              </div>

              <!-- Platform Features -->
              <div class="space-y-6 mb-10">
                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-blue-50/50 hover:from-blue-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-blue-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">500+ Expert-Led Courses</h3>
                    <p class="text-sm text-slate-600">Learn from industry professionals across various domains</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-indigo-50/50 hover:from-indigo-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-indigo-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">Interactive Quizzes & Assignments</h3>
                    <p class="text-sm text-slate-600">Reinforce learning with hands-on exercises and assessments</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-purple-50/50 hover:from-purple-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-purple-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">Progress Tracking & Certificates</h3>
                    <p class="text-sm text-slate-600">Monitor your learning journey and earn verified certificates</p>
                  </div>
                </div>
              </div>

              <!-- Stats Section -->
              <div class="grid grid-cols-3 gap-4 mb-8">
                <div class="text-center p-4 rounded-2xl bg-gradient-to-b from-white to-blue-50/30 border border-slate-100">
                  <div class="text-2xl font-bold text-blue-600">50K+</div>
                  <div class="text-xs text-slate-600">Active Learners</div>
                </div>
                <div class="text-center p-4 rounded-2xl bg-gradient-to-b from-white to-indigo-50/30 border border-slate-100">
                  <div class="text-2xl font-bold text-indigo-600">95%</div>
                  <div class="text-xs text-slate-600">Completion Rate</div>
                </div>
                <div class="text-center p-4 rounded-2xl bg-gradient-to-b from-white to-purple-50/30 border border-slate-100">
                  <div class="text-2xl font-bold text-purple-600">4.9</div>
                  <div class="text-xs text-slate-600">Avg Rating</div>
                </div>
              </div>

              <!-- Security Badge -->
              <div class="flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50/50 border border-emerald-100">
                <svg class="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <div class="text-center">
                  <p class="text-sm font-semibold text-emerald-800">Secure & Encrypted Login</p>
                  <p class="text-xs text-emerald-600">Your data is protected with SSL encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div class="relative ">
          <div class="relative bg-white/90 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0 rounded-3xl border border-slate-200/50 shadow-2xl shadow-indigo-100/50 p-8">
            <!-- Decorative Card Border -->
            <div class="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-indigo-100/50 to-blue-100/50 -m-1"></div>
            
            <div class="relative ">
              <!-- Form Header -->
              <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
                <p class="text-slate-600">Sign in to continue your learning journey</p>
              </div>

              <!-- Login Form -->
              <FormKit
                type="form"
                id="loginForm"
                :actions="false"
                @submit="SubmitLogin"
                form-class="space-y-6 "
              >
                <!-- Email Field -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">Email Address</label>
                  <FormKit
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    validation="required|email"
                    :validation-messages="{
                      required: 'Email is required',
                      email: 'Please enter a valid email address'
                    }"
                    input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                    outer-class="mb-4"
                  />
                </div>

                <!-- Password Field -->
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <label class="block text-sm font-semibold text-slate-700">Password</label>
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <FormKit
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    validation="required|length:6"
                    :validation-messages="{
                      required: 'Password is required',
                      length: 'Password must be at least 6 characters'
                    }"
                    input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                  />
                </div>

                <!-- Remember Me -->
                <div class="flex items-center space-x-3">
                  <input type="checkbox" id="remember" class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500">
                  <label for="remember" class="text-sm text-slate-700">Remember me for 30 days</label>
                </div>

                <!-- Submit Button -->
                <div>
                  <FormKit
                    type="submit"
                    label="Sign In"
                    input-class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-4 rounded-xl hover:shadow-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  />
                </div>
              </FormKit>

              <!-- Social Login Divider -->
              <div class="relative my-8">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-slate-200"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="px-4 bg-white text-sm text-slate-500">Or continue with</span>
                </div>
              </div>

              <!-- Social Login Buttons -->
              <div class="grid grid-cols-2 gap-4 mb-8">
                <button class="flex items-center justify-center space-x-3 px-4 py-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                  <svg class="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span class="text-sm font-medium text-slate-700">Google</span>
                </button>
                <button class="flex items-center justify-center space-x-3 px-4 py-3 rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="text-sm font-medium text-slate-700">GitHub</span>
                </button>
              </div>

              <!-- Signup Link -->
              <div class="text-center pt-6 border-t border-slate-200">
                <p class="text-slate-600 mb-4">New to EduLearn Pro?</p>
                <router-link
                  to="/register"
                  class="inline-flex items-center justify-center w-full py-4 px-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200/30 transition-all duration-300 group"
                >
                  Create your free account
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </router-link>
              </div>

              <!-- Terms & Privacy -->
              <div class="text-center mt-8">
                <p class="text-xs text-slate-500">
                  By signing in, you agree to our
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Terms</a>
                  and
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="text-center mt-12 text-sm text-slate-500">
        <p>© {{ new Date().getFullYear() }} EduLearn Pro. Empowering learners worldwide.</p>
        <p class="mt-1">Need help? <a href="#" class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Contact Support</a></p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

/* Smooth transitions */
::v-deep(.formkit-messages) {
  margin-top: 0.5rem;
}

::v-deep(.formkit-message) {
  font-size: 0.875rem;
  color: #ef4444;
  animation: fadeIn 0.3s ease-in-out;
  padding-left: 0.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>