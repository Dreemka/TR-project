import Vue from 'vue'
import Vuex from 'vuex'
// import UserMe from './modules/userMe'
// import auth from './modules/auth'
// import Sectors from "./modules/sector"
import ProjectList from "./modules/projectList"
import HubtList from "./modules/hubList"
import ContentList from "./modules/contentList"
import FolderList from "./modules/folderList"
// import QAQCReport from "./modules/qaqcReport"


Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    // UserMe,
    // auth,
    // Sectors,
    // QAQCReport,
    HubtList,
    ContentList,
    ProjectList,
    FolderList,
  }
})