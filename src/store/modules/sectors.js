import {HTTP} from "@/http-common";

export default {
  name: 'sectorsMethod',
  actions: {
    async Sectors(ctx , requestData = {}){
      await HTTP.get('api/v2/Main/Sector.getList',{
        params: requestData
      })
          .then(response => {
            let getSectorsData = response.data.result;
            ctx.commit('updateSectors' , getSectorsData)
          })
          .catch(e => {
            console.log(e)
            throw e
          })
    }
  },
  mutations: {
    updateSectors(state , getSectorsData){
      state.getSectorsData = getSectorsData
    }
  },
  state: {
    getSectorsData: [],
  },
  getters: {
    dataSectors(state){
      return state.getSectorsData
    }
  },
}