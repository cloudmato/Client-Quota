import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ec2-52-78-65-7.ap-northeast-2.compute.amazonaws.com:8080',
});

export default axiosInstance;
