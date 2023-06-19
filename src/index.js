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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                {/**这里重定向到home页面 */}
                <Route path="/" element={<Navigate to="home" />}></Route>

                <Route path="home" element={<Layout />}>
                    <Route exact path="/home" element={<Home />} />
                    <Route path="article" element={<ArticleList />} />
                    <Route path="publish" element={<ArticlePublish />} />
                </Route>

                <Route path="login" element={<Login />}></Route>
                {/* 404页面 */}
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    </Router>
)
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
