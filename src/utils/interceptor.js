// Axios interceptor to add the token to the request headers

import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change this to your backend URL
  withCredentials: true
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
        const token = localStorage.getItem('token');
    // If the token exists, add it to the request headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      // If no token, you can choose to redirect to login or handle it as needed
      console.warn('No token found, redirecting to login');
      // window.location.href = '/login'; // Uncomment this line to redirect to login
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;