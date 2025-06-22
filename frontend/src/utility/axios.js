import axios from 'axios'

const axiosInstance = axios.create({ // Adjust the base URL as need
    baseURL:'https://jobmanage-1.onrender.com/',
    withCredentials: true, 
});
export default axiosInstance
