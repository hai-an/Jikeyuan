/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-24 21:06:18
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-25 12:22:00
 * @FilePath: \jikeyuan-pc\src\utils\storage.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 专门存储 localStorage 的文件
const TOKEN_KEY = 'Geek-Park-Pc-Token'

/**
 * @description:获取token
 * @return {string} token
 */
const getToken = () => localStorage.getItem(TOKEN_KEY)

/**
 * @description: 设置token
 * @param {string} token
 * @return {none}
 */
const setToken = token => localStorage.setItem(TOKEN_KEY, token)

/**
 * @description: 移除 token
 * @return {*}
 */
const removeToken = () => localStorage.removeItem(TOKEN_KEY)

/**
 * @description: token是否存在
 * @return {*}
 */
const hasToken = () => !!getToken()

// 全部导出
export { getToken, setToken, removeToken, hasToken }
