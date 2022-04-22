import {HTTP} from "@/http-common";

export default {
  name: 'ContentListMethod',
  actions: {
    async ContentList(ctx , requestData = {}){
      const token = localStorage.getItem('token')
      await HTTP.get('/api/v1/Folder.getContent',{
        params: requestData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
          .then(response => {
            let getContentListData = response.data.result;
            ctx.commit('updateContentList' , getContentListData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateContentList(state , getContentListData){
      state.getContentListData = getContentListData
    }
  },
  state: {
    getContentListData: [],
  },
  getters: {
    dataContentList(state){
      return state.getContentListData
    }
  },
}