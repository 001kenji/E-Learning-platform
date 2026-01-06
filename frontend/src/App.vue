<template class="min-h-screen bg-base-200 w-full ">
  <router-view />
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  <!-- Toast Notification Component -->
  <div class="toast toast-top toast-end z-[100]">
    <div v-for="toast in toasts" :key="toast.id" 
         class="alert" :class="`alert-${toast.type}`">
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { Notivue, Notification, push } from 'notivue'
const toasts = ref([])

// Show toast function
const showToast = (message, type = 'info') => {
  const id = Date.now()
  toasts.value.push({ id, message, type })
  
  setTimeout(() => {
    toasts.value = toasts.value.filter(toast => toast.id !== id)
  }, 3000)
}

// Make showToast available globally
provide('showToast', showToast)
</script>