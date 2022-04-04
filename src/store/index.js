import Vue from 'vue'
import Vuex from 'vuex'
import UserMe from './modules/userMe'
import auth from './modules/auth'
import Sectors from "./modules/sectors"
import ProjectList from "./modules/projectList"
import QAQCReport from "./modules/qaqcReport"


Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    UserMe, auth , Sectors , QAQCReport , ProjectList
  }
})