<template>
  <div class="relative group overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]">
    <!-- Gradient glow effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-2xl"></div>
    
    <!-- Shimmer overlay on hover -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    
    <!-- Top decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    
    <!-- Main content container -->
    <div class="relative p-6">
      <!-- Header section -->
      <div class="flex justify-between items-start mb-6">
        <!-- Creator info -->
        <div class="flex items-center space-x-3">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-lg rounded-full"></div>
            <div class="relative w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full 
                        border border-slate-600 flex items-center justify-center">
              <span class="text-white font-semibold text-sm">
                {{ course.creator?.first_name?.charAt(0) || 'U' }}
              </span>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-slate-300">{{ course.creator?.username || 'Unknown' }}</p>
            <p class="text-xs text-slate-500">Creator</p>
          </div>
        </div>
        
        <!-- Status badge -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-md rounded-full"></div>
          <div class="relative px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border"
               :class="isEnrolled 
                 ? 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30' 
                 : 'bg-primary/20 text-primary-200 border-primary/30'">
            {{ isEnrolled ? 'Enrolled' : 'New' }}
          </div>
        </div>
      </div>
      
      <!-- Course title and description -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-white mb-3 line-clamp-1 group-hover:text-primary-100 transition-colors duration-300">
          {{ course.title }}
        </h3>
        <p class="text-slate-400 text-sm line-clamp-2">
          {{ course.description || 'No description available' }}
        </p>
      </div>
      
      <!-- Stats grid -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span class="text-lg font-bold text-white">{{ course.total_pages || 0 }}</span>
            <span class="text-xs text-slate-400 mt-1">pages</span>
          </div>
        </div>
        
        <div class="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-lg font-bold text-white">{{ Math.ceil((course.total_pages || 0) * 5) }}</span>
            <span class="text-xs text-slate-400 mt-1">minutes</span>
          </div>
        </div>
        
        <div class="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-lg font-bold text-white">{{ course.total_enrollments || 0 }}</span>
            <span class="text-xs text-slate-400 mt-1">students</span>
          </div>
        </div>
      </div>
      
      <!-- Rating section -->
      <div class="flex items-center justify-between mb-6 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30">
        <div class="flex items-center space-x-2">
          <div class="flex">
            <svg v-for="i in 5" :key="i" 
                 xmlns="http://www.w3.org/2000/svg" 
                 class="h-4 w-4"
                 :class="i <= Math.round(course.average_rating || 0) ? 'text-amber-400' : 'text-slate-600'"
                 fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="text-sm font-medium text-slate-300">
            {{ course.average_rating?.toFixed(1) || '0.0' }}
          </span>
        </div>
        <span class="text-xs text-slate-500">
          ({{ course.ratings_count || 0 }} reviews)
        </span>
      </div>
      
      <!-- Progress section (if enrolled) -->
      <div v-if="enrollment" class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-slate-300">Your Progress</span>
          <span class="text-sm font-bold text-primary">
            {{ enrollment.progress_percentage.toFixed(1) }}%
          </span>
        </div>
        <div class="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" 
               :style="{ width: enrollment.progress_percentage + '%' }"></div>
          <!-- Glow effect on progress bar -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-sm rounded-full" 
               :style="{ width: enrollment.progress_percentage + '%' }"></div>
        </div>
        <p class="text-xs text-slate-500 mt-2">
          Page {{ enrollment.current_page }} of {{ course.total_pages }}
        </p>
      </div>
      
      <!-- Action buttons -->
      <div class="flex space-x-3">
        <!-- Preview button -->
        <button @click="$emit('view', course)"
                class="flex-1 flex items-center justify-center space-x-2 px-4 py-3 
                       bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 
                       hover:border-slate-600/50 text-slate-300 hover:text-white
                       rounded-xl font-medium transition-all duration-300 group/btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Preview</span>
        </button>
        
        <!-- Enroll/Continue button -->
        <button v-if="!isEnrolled" @click="$emit('enroll', course)"
                class="flex-1 flex items-center justify-center space-x-2 px-4 py-3 
                       bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 
                       text-white border-0 rounded-xl font-medium 
                       shadow-lg shadow-primary/20 hover:shadow-primary/30 
                       transition-all duration-300 group/btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Enroll</span>
        </button>
        
        <button v-else @click="$emit('view', course)"
                class="flex-1 flex items-center justify-center space-x-2 px-4 py-3 
                       bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 
                       text-white border-0 rounded-xl font-medium 
                       shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 
                       transition-all duration-300 group/btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <span>Continue</span>
        </button>
      </div>
      
      <!-- Additional info footer -->
      <div v-if="course.is_public !== undefined" class="mt-4 pt-4 border-t border-slate-700/30">
        <div class="flex items-center justify-between text-xs">
          <div class="flex items-center space-x-1 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{{ course.is_public ? 'Public' : 'Private' }}</span>
          </div>
          
          <div class="flex items-center space-x-1 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ formatDate(course.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Corner accent -->
    <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden">
      <div class="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rotate-45"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCourseStore } from '@/stores/courseStore'

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})

defineEmits(['enroll', 'view'])

const courseStore = useCourseStore()

const enrollment = computed(() => {
  return courseStore.enrollments.find(e => e.course.id === props.course.id)
})

const isEnrolled = computed(() => !!enrollment.value)

const formatDate = (dateString) => {
  if (!dateString) return 'Recently'
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return date.toLocaleDateString('default', { month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* Glow animation for the entire card */
.group:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 
              0 0 20px -5px rgba(59, 130, 246, 0.2),
              0 0 30px -10px rgba(139, 92, 246, 0.2);
}
</style>