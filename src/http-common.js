import axios from 'axios';
// import axios from 'axios/dist/axios'
import router from './router';

const token = localStorage.getItem('token')
export const HTTP = axios.create({
  baseURL: 'https://dev0api.transporter.geekchain.dev/',
  headers: {
    'Authorization': `Bearer ${token}`
,
  }
})
export const HTTPAUTH = axios.create({
  baseURL: 'https://dev0api.transporter.geekchain.dev/',
})

HTTP.interceptors.response.use(function (response) {
  return Promise.resolve(response);
}, function (error) {
      const { status, data } = error.response;
      console.log(data)
      if (status === 401) {
          router.push("/login");
      }
      return Promise.reject(error);
});