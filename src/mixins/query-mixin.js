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
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    this.getData = async function getData(url = '', data = {}) {
      let self = this
      await HTTP.get(url , {
        params: data,
        ...options,
      })
      .then(function (response) {
        self.response = response.data.result
      })
      .catch(function (error) {
        console.log(error);
      });
      return await self.response;
    }

    this.postData = async function postData(url = '', data = {}) {
      let self = this
      await HTTP.post(url , data , options)
      .then(function (response) {
        self.response = response.data.result
      })
      .catch(function (error) {
        console.log(error);
      });
      return await self.response;

    }



  },
};