// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import router from './global/router'
import store from './global/store.js'
import iview from './global/iview.js'
import muse from './global/muse.js'


//全局资源 filter mixin router store 指令
import global from './global'
import components from './components'

//插件
import lib from './lib'
import '@/assets/css/style.css'
// import 'js-cookie'

Vue.use(global)
Vue.use(components)
Vue.use(lib)
// Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
