/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-25 11:28:04
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-25 14:23:57
 * @FilePath: \jikeyuan-pc\src\components\AuthRoute\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Component } from 'react'
import { Navigate } from 'react-router-dom'
// token
import { hasToken } from '@/utils/storage'
export default class AuthRoute extends Component {
    // 首次刷新页面,调用
    render() {
        console.log('render')
        if (!this.checkAuth()) return <Navigate to="/login" />
        return <this.props.component />
    }

    checkAuth() {
        const isAuthLogin = hasToken()
        console.log('gggg', isAuthLogin)
        if (!isAuthLogin) {
            console.log(this.props)
            return false
        }
        return true
    }
    // 组件显示后,立即调用
    componentDidMount() {
        console.log('componentDidMount')
        return this.checkAuth()
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
        return this.checkAuth()
    }
}
