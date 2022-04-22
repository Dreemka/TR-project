// import axios from 'axios/dist/axios'
// export const HTTP = axios.create({
//   baseUrl: 'https://dev0transporter.etalongroup.com/',
//   headers: {
//     'Authorization': 'Bearer {token}',
//   }
// })
// export const HTTPAUTH = axios.create({
//   baseUrl: 'https://dev0transporter.etalongroup.com/',
// })
// if (localStorage.getItem('token')) {}

const token = localStorage.getItem('token')
import axios from 'axios/dist/axios'
export const HTTP = axios.create({
  baseUrl: 'https://dev0api.transporter.geekchain.dev/',
  headers: {
    'Authorization': `Bearer ${token}`
,
  }
})
export const HTTPAUTH = axios.create({
  baseUrl: 'https://dev0api.transporter.geekchain.dev/',
})