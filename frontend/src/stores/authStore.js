import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useCourseStore } from './courseStore'
export const useAuthStore = defineStore('auth', () => {
  // State - Non-persistent (clears on page refresh)
  const user = ref(null)
  const profile = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // State - Persistent (will be synced with localStorage)
  const accessToken = ref(localStorage.getItem('access_token') || null)
  const refreshToken = ref(localStorage.getItem('refresh_token') || null)
const courseStore = useCourseStore()
  // Getters
  const isAuthenticated = computed(() => !!accessToken.value)
  const fullName = computed(() => {
    if (!user.value) return ''
    return `${user.value.first_name || ''} ${user.value.last_name || ''}`.trim()
  })
  const userEmail = computed(() => user.value?.email || '')

  // Actions
  async function login(formData) {
    try {
      isLoading.value = true
      error.value = null

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/jwt/create/`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        handleLoginError(response, responseData)
        return { success: false, error: error.value }
      }

      // Login successful - store tokens
      const { access, refresh } = responseData
      
      // Save tokens to persistent storage
      setTokens(access, refresh)
      
      // Decode token to get basic user info
      const userInfo = parseJwt(access)
      user.value = userInfo

      

      // Automatically fetch user profile
      await fetchUserProfile()

      await courseStore.fetchUserEnrollments()

      return { success: true, user: userInfo }

    } catch (err) {
      error.value = err.message || 'An unexpected error occurred'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  async function signup(formData) {
    try {
      isLoading.value = true
      error.value = null

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          first_name: formData.firstName,
          last_name: formData.lastName,
          re_password: formData.password
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        handleSignupError(response, responseData)
        return { success: false, error: error.value }
      }

      return { 
        success: true, 
        user: responseData,
        message: 'Registration successful! Please login.'
      }

    } catch (err) {
      error.value = err.message || 'An unexpected error occurred'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  async function fetchUserProfile() {
    try {
      if (!accessToken.value) {
        throw new Error('No access token available')
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/users/me/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken.value}`
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          // Token might be expired, try to refresh
          await refreshAuthToken()
          return await fetchUserProfile() // Retry with new token
        }
        throw new Error(`Failed to fetch profile: ${response.status}`)
      }

      const profileData = await response.json()
      profile.value = profileData
      
      // Update user info with profile data
      user.value = { ...user.value, ...profileData }

      return { success: true, profile: profileData }

    } catch (err) {
      console.error('Error fetching user profile:', err)
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  async function refreshAuthToken() {
    try {
      if (!refreshToken.value) {
        throw new Error('No refresh token available')
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/jwt/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh: refreshToken.value
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error('Token refresh failed')
      }

      // Update tokens
      setTokens(responseData.access, refreshToken.value)
      return responseData.access

    } catch (err) {
      console.error('Token refresh error:', err)
      logout()
      throw err
    }
  }

  function logout() {
    // Clear persistent storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    
    // Clear non-persistent state
    user.value = null
    profile.value = null
    accessToken.value = null
    refreshToken.value = null
    error.value = null
    //reset this store
    const courseStore = useCourseStore()
    
    // Optional: Make API call to blacklist token on server
    // if (refreshToken) {
    //   fetch(`${import.meta.env.VITE_API_URL}/auth/logout/`, {
    //     method: 'POST',
    //     body: JSON.stringify({ refresh: refreshToken })
    //   })
    // }
  }

  // Helper functions
  function setTokens(access, refresh) {
    // Save to persistent storage
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
    
    // Update reactive state
    accessToken.value = access
    refreshToken.value = refresh
  }

  function handleLoginError(response, responseData) {
    if (response.status === 400) {
      if (responseData.email) {
        error.value = `Email error: ${responseData.email.join(', ')}`
      } else if (responseData.password) {
        error.value = `Password error: ${responseData.password.join(', ')}`
      } else if (responseData.non_field_errors) {
        error.value = `Authentication failed: ${responseData.non_field_errors.join(', ')}`
      } else {
        error.value = 'Invalid login credentials'
      }
    } else if (response.status === 401) {
      error.value = 'Invalid email or password'
    } else if (response.status === 404) {
      error.value = 'Authentication endpoint not found'
    } else {
      error.value = `Server error: ${response.status}`
    }
  }

  function handleSignupError(response, responseData) {
    if (response.status === 400) {
      let errorMessage = 'Registration failed: '
      const errorFields = []

      for (const [field, errors] of Object.entries(responseData)) {
        if (Array.isArray(errors)) {
          errorFields.push(`${field}: ${errors.join(', ')}`)
        }
      }

      if (errorFields.length > 0) {
        error.value = errorMessage + errorFields.join('; ')
      } else {
        error.value = errorMessage + 'Please check your input'
      }
    } else {
      error.value = `Registration failed: ${response.statusText}`
    }
  }

  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      return JSON.parse(jsonPayload)
    } catch (e) {
      console.error('Failed to parse JWT:', e)
      return null
    }
  }

  // Initialize from localStorage on store creation
  async function initialize() {
  if (accessToken.value) {
    const userInfo = parseJwt(accessToken.value)
    user.value = userInfo
    
    // Fetch user enrollments on app startup
    const courseStore = useCourseStore()
    await courseStore.fetchUserEnrollments()
  }
}
  async function checkAuthStatus() {
    try {
      const token = localStorage.getItem('access_token')
      if (token) {
        // Decode token to get user info
        const userInfo = parseJwt(token)
        user.value = userInfo
        accessToken.value = token
        refreshToken.value = localStorage.getItem('refresh_token')
        
        // Try to fetch user profile
        await fetchUserProfile()
        return { success: true, user: userInfo }
      }
      return { success: false, user: null }
    } catch (error) {
      console.error('Error checking auth status:', error)
      return { success: false, error: error.message }
    }
  }

  // Call initialize
  initialize()

  return {
    // State
    user,
    profile,
    isLoading,
    error,
    accessToken,
    refreshToken,
    
    // Getters
    isAuthenticated,
    fullName,
    userEmail,
    
    // Actions
    login,
    signup,
    fetchUserProfile,
    refreshAuthToken,
    logout,

    checkAuthStatus,
  }
})