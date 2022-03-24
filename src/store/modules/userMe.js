import {HTTP} from "@/http-common";

export default {
  actions: {
    mountedUserMe(ctx) {
      HTTP.get('/api/v1/user.getMe')
          .then(response => {
            const getData = response.data.result
            ctx.commit('update' , getData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    },
  },
  mutations: {
    update(state , getData){
      state.getData = getData
    }
  },
  state: {
    getData: []
  },
  getters: {
    allUsers(state){
      return state.getData
    }
  },
}