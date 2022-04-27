// import axios from "axios";
import {HTTP} from "@/http-common";

export default {
  data(){
    return {
      respose: []
    }
  },
  created(){
    // this.postData = async function postData(url = '', data = {}) {
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     // body: JSON.stringify(data)
    //     body: JSON.stringify(data)
    //   });
    //   return await response.json();
    // }

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