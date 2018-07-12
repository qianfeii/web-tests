import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import Prismjs from 'prismjs'

import 'element-ui/lib/theme-chalk/index.css'
import 'prismjs/themes/prism-okaidia.css' // coy dark funky okaidia solarizedlight tomorrow twilight
import './assets/styles/reset.css'
import './assets/styles/global.css'
import './assets/styles/icon-font.css'

console.log(Prismjs)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
