export default {
  name: 'listContentDownloadMethod',
  actions: {
    // async listContentDownload(ctx , requestData = {}){
    //   await HTTP.get('/api/v2/Folder.getContent',{
    //     params: requestData
    //   })
    //       .then(response => {
    //         let getlistContentDownloadData = response.data.result;
    //         ctx.commit('updatelistContentDownload' , getlistContentDownloadData)
    //       })
    //       .catch(e => {
    //         console.log(e)
    //         throw e
    //       })
    // }
    listContentDownloadAdd(ctx , listContentDownloadData = {}) {
      console.log(444)
      let getlistContentDownloadData = listContentDownloadData
      ctx.commit('updatelistContentDownload' , getlistContentDownloadData)
    }
  },
  mutations: {
    updatelistContentDownload(state , getlistContentDownloadData){
      state.getlistContentDownloadData = getlistContentDownloadData
    }
  },
  state: {
    getlistContentDownloadData: [],
  },
  getters: {
    datalistContentDownload(state){
      return state.getlistContentDownloadData
    }
  },
}