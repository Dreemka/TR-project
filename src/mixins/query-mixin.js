// import axios from "axios";
import {HTTP} from "@/http-common";

export default {
  data(){
    return {
      respose: []
    }
  },
  created(){
    const token = localStorage.getItem('token')

    this.postData = async function postData(url = '', data = {}) {
      let self = this
      await HTTP.get(url , {
        params: data,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function (response) {
        self.response = response.data.result
        // console.log(self.response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return await self.response;

    }



  },
};