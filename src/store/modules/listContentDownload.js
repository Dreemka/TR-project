export default {
  name: 'listContentDownloadMethod',
  actions: {
    listContentDownloadAdd(ctx , listContentDownloadData = {}) {
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