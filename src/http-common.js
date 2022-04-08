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
import axios from 'axios/dist/axios'
export const HTTP = axios.create({
  baseUrl: 'https://dev0api.transporter.geekchain.dev/',
  headers: {
    'Authorization': 'Bearer {token}',
  }
})
export const HTTPAUTH = axios.create({
  baseUrl: 'https://dev0api.transporter.geekchain.dev/',
})