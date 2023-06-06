import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@babel/polyfill'
import ElementUI from 'element-ui';
import NosUI from 'nos-ui';
import 'nos-ui/lib/nos-ui.css'
import 'nos-ui/theme/index.css';
import 'nos-ui/src/assets/css/common.scss'
import '@/assets/scss/index.scss'
import '@/assets/fonts/fonts.css'
// import NosAuthority from 'nos-authority'
import '../public/iconfont/iconfont.css'
import tool from './utils/NB.js';
import './router/permission'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(NosUI, {
  server: tool.getServeUrl(),
  upUrl: '',
  downUrl: '',
  viewUrl: ''
});
// Vue.use(NosAuthority);

import axios from './utils/request.js';
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
