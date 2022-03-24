import axios from 'axios/dist/axios'
export const HTTP = axios.create({
  baseUrl: 'https://dev0skks.etalongroup.com/',
  headers: {
    'Authorization': 'Bearer {token}',
  }
})
export const HTTPAUTH = axios.create({
  baseUrl: 'https://dev0skks.etalongroup.com/',
})