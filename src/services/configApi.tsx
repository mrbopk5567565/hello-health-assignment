import axios from 'axios';

const APIInstance = axios.create({
  baseURL: process.env.REACT_APP_HELLO_HEALTH_API,
})

APIInstance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  }
)

export default APIInstance;