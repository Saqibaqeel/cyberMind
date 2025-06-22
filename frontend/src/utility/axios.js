import axios from 'axios'

const axiosInstance = axios.create({ // Adjust the base URL as need
    withCredentials: true, 
});
export default axiosInstance
