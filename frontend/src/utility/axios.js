import axios from 'axios'

const axiosInstance = axios.create({ // Adjust the base URL as need
    baseURL:'https://cybermind-lv12.onrender.com/', // Adjust the base URL as needed
    withCredentials: true, 
});
export default axiosInstance
