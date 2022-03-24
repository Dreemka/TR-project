import {HTTP} from "@/http-common"

export default {
    name: 'qaqcReport',

    actions: {
      async QAQCReport(ctx , apiData = {}){
        await HTTP.get(apiData.method,{
          params: apiData.requestData
        })
            .then(response => {
              let getQAQCReportData = response.data.result;
              ctx.commit('updateQAQCReport' , getQAQCReportData)
              // throw response
            })
            .catch(e => {
              console.log(e)
              throw e
            })
      }
    },
    mutations: {
      updateQAQCReport(state , getQAQCReportData){
        state.getQAQCReportData = getQAQCReportData
      }
    },
    state: {
      getQAQCReportData: {},
    },
    getters: {
      dataQAQCReport(state){
        return state.getQAQCReportData
      }
    },
  }