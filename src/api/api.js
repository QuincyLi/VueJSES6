import axios from 'axios'
import {MessageBox} from 'element-ui'
// 测试
let baseApi = 'http://192.168.10.73:8089/progress'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

const trans = params => {
  // Do whatever you want to transform the data
  let ret = ''
  for (let it in params) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&'
  }
  return ret
}
// get 请求
export const getReq = (api, params) => {
  params = params ? trans(params) : ''
  return axios.get(`${baseApi}${api}?${params}`).then(res => res.data)
}
// post请求
export const postReq = (api, params) => {
  params = params ? trans(params) : {}
  return axios.post(`${baseApi}${api}`, params).then(res => res.data)
}

export const errorInfo = (errcode, message) => {
  message = message || '请求失败'
  MessageBox.alert(message, '提示', {
    confirmButtonText: '确定'
  })
}
