import axios from 'axios'
export default {
  install(Vue) {
    // 创建一个axios实例
    const axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 15000 // 请求超时时间
    })
    // 注册请求拦截器
    axiosInstance.interceptors.request.use(config => {
      if (window.sessionStorage) {
        config.headers['token'] = sessionStorage.token
      }
      return config
    }, err => {
      return Promise.reject(err)
    })
    // 注册响应拦截器
    axiosInstance.interceptors.response.use(response => {
      return Promise.resolve(response)
    }, err => {
      return Promise.reject(err)
    })
    Vue.prototype.$ajax = axiosInstance
    window.$ajax = axiosInstance
  }
}