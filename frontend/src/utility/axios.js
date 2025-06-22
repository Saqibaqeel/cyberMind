import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jobmanage-1.onrender.com/', 
    withCredentials: true, 
});
export default axiosInstance