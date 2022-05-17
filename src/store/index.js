import Vue from 'vue'
import Vuex from 'vuex'
// import UserMe from './modules/userMe'
import auth from './modules/auth'
// import Sectors from "./modules/sector"
import ProjectList from "./modules/projectList"
import ProjectSettingList from "./modules/projectSettingList"
import HubtList from "./modules/hubList"
import ContentList from "./modules/contentList"
import FolderList from "./modules/folderList"
import listContentDownload from "./modules/listContentDownload"
import profile from "./modules/profile"


Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    // UserMe,
    auth,
    // Sectors,
    // QAQCReport,
    HubtList,
    ContentList,
    ProjectList,
    ProjectSettingList,
    FolderList,
    listContentDownload,
    profile,
  },
  state: {
    error: null,
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
     setError(state , error) {
       state.error = error
     },
     clearError(state) {
       state.error = null
     }
  },
  getters: {
    error: s => s.error
  }
})