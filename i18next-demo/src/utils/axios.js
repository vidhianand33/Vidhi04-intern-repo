import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',  // Replace with your API's base URL
  headers: {
    'Accept': '*/*',
    'Request-ID': generateRequestId(), // Dynamic request ID
  },
  timeout: 10000,  // Timeout after 10 seconds
});

// Function to generate a unique request ID (for example, using a timestamp)
function generateRequestId() {
  return `req-${Date.now()}`;
}

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve auth token from local storage (if available)
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // Attach the token to the request headers
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,  // Simply return response if successful
  (error) => {
    // Handle errors, for example, redirect if unauthorized
    if (error.response && error.response.status === 401) {
      // Redirect to login page if the token is invalid
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
