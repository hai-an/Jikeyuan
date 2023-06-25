/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-09 16:39:41
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-25 14:32:59
 * @FilePath: \jikeyuan-pc\src\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// 路由组件
import App from './App'
import Layout from './pages/Layout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
// 导入子 路由组件
import Home from './pages/Home'
import ArticleList from './pages/ArticleList'
import ArticlePublish from './pages/ArticlePublish'
// 样式
import './index.less'
import AuthRoute from './components/AuthRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                {/**这里重定向到home页面 */}
                <Route path="/" element={<Navigate to="home" />}></Route>

                <Route path="home" element={<AuthRoute component={Layout} />}>
                    <Route exact path="/home" element={<AuthRoute component={Home} />} />
                    <Route path="article" element={<AuthRoute component={ArticleList} />} />
                    <Route path="publish" element={<AuthRoute component={ArticlePublish} />} />
                </Route>

                <Route path="login" element={<Login />}></Route>
                {/* 404页面 */}
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    </Router>
)
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
