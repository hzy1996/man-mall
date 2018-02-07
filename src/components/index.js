
//全局组件
import MyHeader from './MyHeader'
import MyMain from './MyMain.vue'
import MyFooter from './MyFooter'
// import MyMagnify from './MyMagnify'

export default {
  install(Vue) {
    Vue.component('MyHeader',MyHeader)
    Vue.component('MyMain',MyMain)
    Vue.component('MyFooter',MyFooter)
    // Vue.component('MyMagnify',MyMagnify)
  }
} 