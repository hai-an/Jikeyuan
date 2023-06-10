import { sendRequest } from '@/utils/request'
/*******
 * @description: 用户(手机验证码) 登录-post,获取token
 * @param {string} mobile 手机号
 * @param {string} code 验证码
 * @return Promise
 */
const login = (mobile, code) =>
  sendRequest('/authorizations', 'post', {
    mobile,
    code,
  })
export { login }
