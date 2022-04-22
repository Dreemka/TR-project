// import {HTTPAUTH} from "@/http-common";
import {HTTP} from "@/http-common";
// import Axios from 'axios'


export default {
  name: "LoginMethod",
  actions: {
    
    async login(ctx , query){
      let form = new FormData()
      for (let key in query) {
        form.append(key , query[key])
      }
      await HTTP.post(`auth/v1/login`,form)
            .then(response => {
              const getData = response.data.result
              console.log(getData)
              ctx.commit('update' , getData)
            })
            .catch(e => {
              console.log(e)
              ctx.commit('setError' , e)
              throw e
            })

    },
    async logOut(ctx){
      ctx.commit('deleteToken')


      await HTTP.post('auth/logout').then(response => {
        console.log(response.data)}).catch(e => {
        console.log(e)})
    }
  },
  mutations: {
    update(state , getData){
      state.getData = getData
      // state.credentials.token = getData.access_token
      localStorage.setItem('token', getData.access_token)
    },
    deleteToken(state){
      console.log(state)
      // state.credentials.token = null
      localStorage.removeItem('token')
    }
  },
  state: {
    getData: [],
  },
  getters: {
    data(state){
      return state.getData
    }
  },
}