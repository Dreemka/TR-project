import {HTTP} from "@/http-common";

export default {
  name: 'FolderListMethod',
  actions: {
    async FolderList(ctx , requestData = {}){
      // const token = localStorage.getItem('token')
      await HTTP.get('/api/v2/Folder.getFolderList',{
        params: requestData,
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      })
          .then(response => {
            let getFolderListData = response.data.result;
            ctx.commit('updateFolderList' , getFolderListData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateFolderList(state , getFolderListData){
      state.getFolderListData = getFolderListData
    }
  },
  state: {
    getFolderListData: [],
  },
  getters: {
    dataFolderList(state){
      return state.getFolderListData
    }
  },
}