/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-25 11:28:04
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-25 21:33:29
 * @FilePath: \jikeyuan-pc\src\components\AuthRoute\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { hasToken } from '@/utils/storage'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthRoute = props => {
    const location = useLocation()
    const navigate = useNavigate()
    const isAuthLogin = hasToken() // 获取token的逻辑

    useEffect(() => {
        // 在路由变化时执行的逻辑
        // 您可以在这里重新触发 AuthRoute 组件中的代码逻辑
        // 例如，您可以检查 token 是否存在，并根据情况进行页面跳转或其他操作
        if (!isAuthLogin) {
            navigate('/login', { state: { from: location.pathname } })
        }
    }, [location.pathname, navigate, isAuthLogin])

    // if (!isAuthLogin) {
    //     return null
    // }
    if (!isAuthLogin) {
        return null // 或者返回一个加载中的组件
    }
    console.log('狗东西')
    return <props.component />
}

export default AuthRoute
