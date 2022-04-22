import {HTTP} from "@/http-common";

export default {
  name: 'profileMethod',
  actions: {
    async profile(ctx , requestData = {}){
    const token = localStorage.getItem('token')
      await HTTP.get('/api/v1/Profile.getMe',{
        params: requestData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
          .then(response => {
            let getprofileData = response.data.result;
            ctx.commit('updateprofile' , getprofileData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateprofile(state , getprofileData){
      state.getprofileData = getprofileData
    }
  },
  state: {
    getprofileData: [],
  },
  getters: {
    dataprofile(state){
      return state.getprofileData
    }
  },
}