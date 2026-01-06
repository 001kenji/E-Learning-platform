<script setup>
    import { useRouter } from 'vue-router'
  // import {handleSignup} from '../actions/requests.vue'
  import { useAuthStore } from '../../stores/authStore'
  import { push } from 'notivue'
  const  authStore = useAuthStore()
  const router = useRouter()

const SubmitSignup = async (formData) => {
  // Handle signup logic here
  console.log('Signup form submitted:', formData)
  // You would typically make an API call here
  await authStore.signup(formData)
    .then((response) => {
      if (response.success) {
        console.log('Signup success:', response.message);
        push.success('Signup successful! Please log in.');
        router.push('/login'); // Redirect to login page after successful signup
      } else {
        console.error('Signup failed:', response.error);
        push.error(`${response.error}`);
      }
    })
    .catch((error) => {
      console.error('Signup error:', error);
      push.error(`An error occurred: ${error.message}`);
    });
}

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center p-4">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-3000"></div>
      <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-1500"></div>
    </div>

    <div class="relative w-full max-w-6xl mx-auto">
      <!-- Top Navigation -->
      <div class="flex flex-row flex-wrap gap-2 justify-between items-center mb-12">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            EduLearn<span class="font-extrabold text-purple-700">Pro</span>
          </span>
        </div>
        <div class="text-sm text-slate-600 ml-auto lg:ml-0">
          Already have an account? 
          <router-link to="/login" class="font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300">
            Sign in →
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Side - Registration Benefits -->
        <div class="relative">
          <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-2xl shadow-purple-100/50 p-8 h-full">
            <!-- Decorative Card Border -->
            <div class="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 -m-1"></div>
            
            <div class="relative">
              <!-- Header -->
              <div class="text-center mb-10">
                <div class="relative inline-block mb-6">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 blur-xl rounded-full"></div>
                  <div class="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <h1 class="text-3xl font-bold text-slate-800 mb-2">Join Our Learning Community</h1>
                <p class="text-slate-600 text-lg">Start your journey</p>
              </div>

              <!-- Registration Benefits -->
              <div class="space-y-6 mb-10">
                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-purple-50/50 hover:from-purple-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-purple-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">Access 500+ Premium Courses</h3>
                    <p class="text-sm text-slate-600">Unlimited access to all courses during trial period</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-pink-50/50 hover:from-pink-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-pink-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">Industry-Recognized Certificates</h3>
                    <p class="text-sm text-slate-600">Earn certificates upon course completion</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-indigo-50/50 hover:from-indigo-50 hover:to-white transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-indigo-200">
                  <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800 mb-1">Join Learning Communities</h3>
                    <p class="text-sm text-slate-600">Connect with peers and instructors</p>
                  </div>
                </div>
              </div>

              <!-- Testimonials -->
              <div class="mb-8">
                <h3 class="font-semibold text-slate-800 mb-4 text-center">What Our Learners Say</h3>
                <div class="space-y-4">
                  <div class="p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50/50 border border-slate-100">
                    <div class="flex items-center space-x-3 mb-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                        <span class="font-bold text-blue-600">JD</span>
                      </div>
                      <div>
                        <p class="font-semibold text-slate-800">John Doe</p>
                        <p class="text-xs text-slate-500">Software Engineer</p>
                      </div>
                    </div>
                    <p class="text-sm text-slate-600 italic">"The progress tracking feature helped me complete 5 courses in 2 months!"</p>
                  </div>
                </div>
              </div>

              <!-- Free Trial Badge -->
              <div class="flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50/50 border border-emerald-100">
                <svg class="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                </svg>
                <div class="text-center">
                  <p class="text-sm font-semibold text-emerald-800">No payments</p>
                  <p class="text-xs text-emerald-600">No credit card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Registration Form -->
        <div class="relative">
          <div class="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-2xl shadow-pink-100/50 p-8">
            <!-- Decorative Card Border -->
            <div class="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-pink-100/50 to-purple-100/50 -m-1"></div>
            
            <div class="relative">
              <!-- Form Header -->
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-slate-800 mb-2">Create Your Account</h2>
                <p class="text-slate-600">Start your learning journey in minutes</p>
              </div>

              <!-- Registration Form -->
              <FormKit
                type="form"
                id="registerForm"
                :actions="false"
                @submit="SubmitSignup"
                form-class="space-y-6"
              >
                <!-- Name Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-slate-700">First Name</label>
                    <FormKit
                      type="text"
                      name="first_name"
                      placeholder="John"
                      validation="required"
                      input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                    />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-slate-700">Last Name</label>
                    <FormKit
                      type="text"
                      name="last_name"
                      placeholder="Doe"
                      validation="required"
                      input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                    />
                  </div>
                </div>

                <!-- Email Field -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">Email Address</label>
                  <FormKit
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    validation="required|email"
                    input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                  />
                </div>

                <!-- Password Fields -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-slate-700">Password</label>
                    <FormKit
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      validation="required|length:6"
                      input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                    />
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-slate-700">Confirm Password</label>
                    <FormKit
                      type="password"
                      name="confirm_password"
                      placeholder="••••••••"
                      validation="required|confirm:password"
                      input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                    />
                  </div>
                </div>

                <!-- Username -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">Username</label>
                  <FormKit
                    type="text"
                    name="username"
                    placeholder="johndoe123"
                    validation="required"
                    input-class="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white/50 focus:border-purple-500 focus:ring-4 focus:ring-purple-200/30 focus:bg-white placeholder:text-slate-400 text-slate-700 transition-all duration-300"
                  />
                </div>

                <!-- Terms Agreement -->
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <input type="checkbox" id="terms" class="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500 mt-1">
                    <label for="terms" class="text-sm text-slate-700">
                      I agree to the 
                      <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">Terms of Service</a>
                      and 
                      <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">Privacy Policy</a>
                    </label>
                  </div>
                  <div class="flex items-start space-x-3">
                    <input type="checkbox" id="newsletter" class="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500 mt-1">
                    <label for="newsletter" class="text-sm text-slate-700">
                      I want to receive learning tips and course updates
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <div>
                  <FormKit
                    type="submit"
                    label="Create Free Account"
                    input-class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-4 rounded-xl hover:shadow-xl shadow-lg shadow-purple-200 hover:shadow-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  />
                </div>
              </FormKit>

              <!-- Social Registration Divider -->
              <div class="relative my-8">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-slate-200"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="px-4 bg-white text-sm text-slate-500">Or sign up with</span>
                </div>
              </div>

              <!-- Social Registration Buttons -->
              <div class="grid grid-cols-2 gap-4 mb-6">
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

              <!-- Login Link -->
              <div class="text-center pt-6 border-t border-slate-200">
                <p class="text-slate-600 mb-4">Already have an account?</p>
                <router-link
                  to="/login"
                  class="inline-flex items-center justify-center w-full py-4 px-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/30 transition-all duration-300 group"
                >
                  Sign in to your account
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="text-center mt-12 text-sm text-slate-500">
        <p>© {{ new Date().getFullYear() }} EduLearn Pro. Start learning today, transform tomorrow.</p>
        <p class="mt-1">Questions? <a href="#" class="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300">Visit our Help Center</a></p>
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

/* Password strength indicator */
.password-strength {
  transition: all 0.3s ease;
}
</style>