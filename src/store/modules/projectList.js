import {HTTP} from "@/http-common";

export default {
  name: 'projectListMethod',
  actions: {
    async ProjectList(ctx , requestData = {}){
      await HTTP.get('api/v1/Project.getList',{
        params: requestData
      })
          .then(response => {
            let getProjectListData = response.data.result;
            ctx.commit('updateProjectList' , getProjectListData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateProjectList(state , getProjectListData){
      state.getProjectListData = getProjectListData
    }
  },
  state: {
    getProjectListData: [],
  },
  getters: {
    dataProjectList(state){
      return state.getProjectListData
    }
  },
}