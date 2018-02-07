export default {
  install(Vue) {
    Vue.directive('focus', {
      inserted(el,binding) {
        console.log('fucus',binding.value)
      }
    })
  }
}
