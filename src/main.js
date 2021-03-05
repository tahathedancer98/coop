import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import md5 from 'crypto-js/md5';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
// window.md5=md5;

window.api = axios.create({
  baseURL: 'https://tools.sopress.net/iut/coop/api/',
  headers: { Authorization: 'dbb59481e374a8a1821b8acea09be603bb967ae2' }
});
/*
let config = {
	headers: {'Authorization': "dbb59481e374a8a1821b8acea09be603bb967ae2"}
}
Axios.post(api_route,params,config).then(() => { ... });
*/
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  beforeCreate() {
    api.interceptors.request.use(config => {
      if (this.$store.state.token){
        config.url += '?token=' + this.$store.state.token;
      }
      return config;
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
