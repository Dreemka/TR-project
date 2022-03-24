import {HTTPAUTH} from "@/http-common";
import {HTTP} from "@/http-common";

export default {
  name: "LoginMethod",
  actions: {
    async login(ctx , {email , password , remember}){
      await HTTPAUTH.post('auth/login',{
            email: email,
            password: password,
            remember: remember,
        })
            .then(response => {
              const getData = response.data.result
              ctx.commit('update' , getData)

            })
            .catch(e => {
              console.log(e)
              throw e
            })

    },
    async logOut(){
      await HTTP.post('auth/logout').then(response => {
        console.log(response.data)}).catch(e => {
        console.log(e)})
    }
  },
  mutations: {
    update(state , getData){
      state.getData = getData
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