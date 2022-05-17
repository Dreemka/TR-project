import {HTTP} from "@/http-common";

export default {
  name: 'ProjectSettingListMethod',
  actions: {
    async ProjectSettingList(ctx , requestData = {}){
      const token = localStorage.getItem('token')
      const options = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      await HTTP.post('/api/v1/Settings.projectList', requestData , options)
          .then(response => {
            let getProjectSettingListData = response.data.result;
            ctx.commit('updateProjectSettingList' , getProjectSettingListData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateProjectSettingList(state , getProjectSettingListData){
      state.getProjectSettingListData = getProjectSettingListData
    }
  },
  state: {
    getProjectSettingListData: [],
  },
  getters: {
    dataProjectSettingList(state){
      return state.getProjectSettingListData
    }
  },
}