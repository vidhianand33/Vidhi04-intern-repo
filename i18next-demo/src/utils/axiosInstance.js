import axios from 'axios';

// Function to generate a unique request ID using a timestamp
function generateRequestId() {
  return `req-${Date.now()}`;
}

// Create an Axios instance with the required configurations
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',  // Replace with your API's base URL
  headers: {
    'Accept': '*/*',
    'Request-ID': generateRequestId(),  // Dynamic request ID
  },
  timeout: 10000,  // Timeout after 10 seconds
});

// Request interceptor to attach token to the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors, such as 401 Unauthorized
axiosInstance.interceptors.response.use(
  (response) => response,  // If the response is successful, return it
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';  // Redirect to login if the token is invalid
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
