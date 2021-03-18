import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
// window.md5=md5;

window.api = axios.create({
  baseURL: 'https://allweb.fun/coop/api/',
  headers: { Authorization: 'f7550f8b269f5ae7e0b16eb35d6c2e2b646ebad3' }
});

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
