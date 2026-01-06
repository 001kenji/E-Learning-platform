import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'
import { plugin as formkitPlugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import '@mdi/font/css/materialdesignicons.css'
import { createNotivue } from 'notivue'
// Import all your components
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Courses from './views/Courses.vue'
import MyCourses from './views/MyCourses.vue'
import CreateCourse from './views/CreateCourse.vue'
import Profile from './views/Profile.vue'
import Homepage from './views/homepag.vue'
import CourseViewer from './components/Course/CourseViewer.vue'
import 'notivue/notification.css' // Only needed if using built-in <Notification />
import 'notivue/animations.css' // Only needed if using default animations
// Create router with all routes
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Homepage, meta: { requiresAuth: false } },
  { path: '/login', name: 'login', component: Login, meta: { requiresAuth: false } },
  { path: '/register', name: 'register', component: Register, meta: { requiresAuth: false } },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/courses', name: 'courses', component: Courses, meta: { requiresAuth: true } },
  { path: '/courses/new', name: 'create-course', component: CreateCourse, meta: { requiresAuth: true } },
  { path: '/course/:slug', name: 'course-view', component: CourseViewer, meta: { requiresAuth: true } },
  { path: '/my-courses', name: 'my-courses', component: MyCourses, meta: { requiresAuth: true } },
  { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
  // Add a catch-all route for 404
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const notivue = createNotivue(/* Options */)
// Add navigation guard for authentication
import { useAuthStore } from './stores/authStore'
import Homepag from './views/homepag.vue'

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/register') && authStore.isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

const pinia = createPinia()
const app = createApp(App)
app.use(notivue)
app.use(router)
app.use(formkitPlugin, defaultConfig)
app.use(pinia)

app.mount('#app')