//全局指令
import directives from './directives'

export default {
  install(Vue) {
    Vue.use(directives)
  }
}
