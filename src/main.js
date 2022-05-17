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

Vue.use(BroadcastData);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
