import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
  },
  timeout: 300000, // Fetch all cards api takes long time
});

axiosInstance.interceptors.response.use(undefined, err => {
  console.log('errorrrrr', err.response);
});

export default axiosInstance;
