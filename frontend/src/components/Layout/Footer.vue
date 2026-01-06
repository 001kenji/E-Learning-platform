<template>
  <footer class="footer py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-t border-slate-700/50">
    <div class="container mx-auto px-6">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
        <!-- Brand & Description -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl rounded-full"></div>
              <div class="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl 
                          flex items-center justify-center text-white font-bold text-lg shadow-lg">
                EP
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                EduLearn<span class="font-extrabold text-primary">Pro</span>
              </h3>
              <p class="text-sm text-slate-400">Advanced Learning Platform</p>
            </div>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed max-w-md">
            An immersive learning platform for tracking progress in online courses. 
            Learn at your own pace, track your achievements, and unlock your potential.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 
                             flex items-center justify-center hover:bg-slate-700/50 hover:border-primary/30 
                             transition-all duration-300 group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 
                             flex items-center justify-center hover:bg-slate-700/50 hover:border-primary/30 
                             transition-all duration-300 group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 
                             flex items-center justify-center hover:bg-slate-700/50 hover:border-primary/30 
                             transition-all duration-300 group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white mb-6 relative inline-block">
              Navigation
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/dashboard" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link to="/courses" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Browse Courses</span>
                </router-link>
              </li>
              <li>
                <router-link to="/my-courses" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>My Courses</span>
                </router-link>
              </li>
              <li>
                <router-link to="/profile" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Profile</span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Legal Links -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white mb-6 relative inline-block">
              Legal
              <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h4>
            <ul class="space-y-3">
              <li>
                <router-link to="/terms" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Terms of Use</span>
                </router-link>
              </li>
              <li>
                <router-link to="/privacy" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Privacy Policy</span>
                </router-link>
              </li>
              <li>
                <router-link to="/cookies" 
                           class="flex items-center space-x-2 text-slate-400 hover:text-primary 
                                  transition-all duration-300 group">
                  <div class="w-1 h-1 bg-slate-600 group-hover:bg-primary rounded-full transition-all duration-300"></div>
                  <span>Cookie Policy</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-white mb-6 relative inline-block">
            Stay Updated
            <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h4>
          <p class="text-sm text-slate-400">Subscribe to our newsletter for the latest course updates.</p>
          <div class="flex space-x-2">
            <input type="email" placeholder="Your email" 
                   class="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl 
                          focus:border-primary/50 focus:ring-2 focus:ring-primary/20 
                          placeholder:text-slate-500 text-white transition-all duration-300">
            <button class="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 
                          hover:to-primary/70 text-white rounded-xl font-medium transition-all duration-300
                          shadow-lg shadow-primary/20 hover:shadow-primary/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-700/50">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div class="text-center lg:text-left">
            <p class="text-slate-400">© {{ currentYear }} EduLearn Pro. All rights reserved.</p>
            <p class="text-xs text-slate-500 mt-2">Empowering learners worldwide through innovative education.</p>
          </div>
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span class="text-sm text-slate-400">System Status: <span class="text-emerald-400">Operational</span></span>
            </div>
            <div class="text-sm">
              <span class="text-slate-500">v{{ appVersion }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    appVersion() {
      return '1.0.0'; // Replace with your actual version
    }
  }
}
</script>