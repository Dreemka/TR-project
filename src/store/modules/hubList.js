import {HTTP} from "@/http-common";

export default {
  name: 'hubListMethod',
  actions: {
    async HubList(ctx , requestData = {}){
      await HTTP.get('/api/v2/Hub.getList',{
        params: requestData
      })
          .then(response => {
            let getHubListData = response.data.result;
            ctx.commit('updateHubList' , getHubListData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateHubList(state , getHubListData){
      state.getHubListData = getHubListData
    }
  },
  state: {
    getHubListData: [],
  },
  getters: {
    dataHubList(state){
      return state.getHubListData
    }
  },
}