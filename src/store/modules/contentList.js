import {HTTP} from "@/http-common";

export default {
  name: 'ContentListMethod',
  actions: {
    async ContentList(ctx , requestData = {}){
      await HTTP.get('/api/v2/Folder.getContent',{
        params: requestData
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