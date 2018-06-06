// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './route';
import './assets/styles/global.css';

import store from './store/index';

import { sync } from 'vuex-router-sync';

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
