import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求前做什么
    return config
  },
  function (error) {
    // 对请求错误做什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做什么
    return response.data
  },
  function (error) {
    // 对响应错误做什么
    return Promise.reject(error)
  }
)

export default instance
