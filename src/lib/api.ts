import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

/**
 * Detailing Devil API Client
 * Configured Axios instance with standard interceptors and error handling.
 */
export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Optionally inject auth token if stored in localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status
    const message = (error.response?.data as { message?: string })?.message || error.message

    if (status === 401) {
      // Handle unauthorized session / token expiration
      console.warn('Unauthorized request - session may be expired.')
    }

    return Promise.reject({
      status,
      message,
      originalError: error,
    })
  }
)

export default api
