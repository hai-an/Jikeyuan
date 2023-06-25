/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-25 11:28:04
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-25 19:51:28
 * @FilePath: \jikeyuan-pc\src\components\AuthRoute\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { hasToken } from '@/utils/storage'
import { useLocation, Navigate } from 'react-router-dom'

const AuthRoute = props => {
    const location = useLocation()
    const isAuthLogin = hasToken() // 获取token的逻辑
    if (!isAuthLogin) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    }

    return <props.component />
}

export default AuthRoute
