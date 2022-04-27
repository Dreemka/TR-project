import Vue from 'vue'
import store from './store'
import App from './App.vue'
import BroadcastData from '@/plugins/broadcast-data'
import Vuelidate from "vuelidate"
import messagePlugin from "./plugins/utils/message.plugin"
import router from './router'
// import Axios from 'axios'
import dateFilter from "@/filters/date.filters"
import langFilter from "@/filters/lang.filters"
import {i18n} from './plugins/i18n'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'materialize-css/dist/js/materialize.min'
// import VueResource from 'vue-resource';


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date' , dateFilter)
Vue.filter('lang' , langFilter)
Vue.directive('init', { 
  bind: function(el, binding, vnode) { 
    vnode.context[binding.arg] = binding.value; 
  } 
});
// function b64DecodeUnicode(str) {
//   // Going backwards: from bytestream, to percent-encoding, to original string.
//   return decodeURIComponent(atob(str).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));
// }
// Vue.prototype.$http = Axios;


// console.log(localStorage.getItem('token'));
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
// }
// this.$router.push({ name: 'login'})


Vue.use(BroadcastData);
// Vue.use({
//   install(vue) {
//     vue.prototype.$broadcast = null;
//     vue.mixin({
//       beforeCreate() {
//         if (this.$options.$module) {
//           this.$broadcast = new Vue();  // <--
//         } else if (this.$parent && this.$parent.$broadcast) {
//           this.$broadcast = this.$parent.$broadcast;  // <--
//         }
//       },
//     });
//   },
// });
// Vue.use(VueResource);
// Vue.http.interceptors.push(function(request,next){

//   // modifying request headers
//   request.headers.set('X-CSRF-TOKEN', 'TOKEN');
//   request.headers.set('Authorization', 'Bearer TOKEN');
//   console.log(2222)

//   next(function(response){
//       //logging the response body
//       console.log(3333)
//       console.log(response.body)

//   });
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
