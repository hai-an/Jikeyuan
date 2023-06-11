/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-10 21:46:21
 $ *LastEditors: hai_an 1207783846@qq.com
 $ *LastEditTime: 2023-06-10 21:50:21
 $ *FilePath: \jikeyuan-pc\src\api\user.js
 $ *Description:
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
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
