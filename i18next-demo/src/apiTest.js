import axiosInstance from './utils/axiosInstance';

const postData = async () => {
  const params = {
    username: 'testuser',
    password: 'testpassword',
  };

  try {
    // Sending a POST request to the API endpoint
    const response = await axiosInstance.post('/login', params);  // Replace with your actual API endpoint
    console.log('Response:', response.data);
    
    // Handle redirection if the response contains a redirect URL (e.g., after successful login)
    if (response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;  // Redirect if URL is returned
    }
  } catch (error) {
    console.error('Error during API request:', error);
  }
};

postData();  // Call the function to make the request
