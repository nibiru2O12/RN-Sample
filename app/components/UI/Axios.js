import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.254.106:5000'
});

export default instance;