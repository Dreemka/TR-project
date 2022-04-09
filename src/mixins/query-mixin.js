import axios from "axios";
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


    this.postData = async function postData(url = '', data = {}) {
      let self = this
      await axios.get(url , {
        params: data,
      })
      .then(function (response) {
        self.response = response.data.result
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return await self.response;

    }



  },
};