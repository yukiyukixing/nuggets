import Vue from 'vue'
import App from './App.vue'
// import YDUI from 'vue-ydui'
// import 'vue-ydui/dist/ydui.rem.css';
import router from '@/routers'
import store from '@/stores'

import axios from 'axios'
Vue.prototype.axios = axios;

// Vue.use(YDUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
