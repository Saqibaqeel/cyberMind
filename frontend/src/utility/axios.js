import axios from 'axios'

const axiosInstance = axios.create({ // Adjust the base URL as need
    baseURL:'http://localhost:3000/', // Adjust the base URL as needed
    withCredentials: true, 
});
export default axiosInstance
