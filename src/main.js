import Vue from 'vue'
import store from './store'
import App from './App.vue'
import BroadcastData from '@/plugins/broadcast-data'
import Vuelidate from "vuelidate"
import messagePlugin from "./plugins/utils/message.plugin"
import router from './router'
import Axios from 'axios'
import dateFilter from "@/filters/date.filters"
import langFilter from "@/filters/lang.filters"
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date' , dateFilter)
Vue.filter('lang' , langFilter)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
