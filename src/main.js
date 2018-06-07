// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './route';

import store from './store/index';
import ElementUI from 'element-ui';
import { sync } from 'vuex-router-sync';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css';
import './assets/styles/global.css';
import './assets/styles/icon-font.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
