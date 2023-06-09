/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-09 16:39:41
 $ *LastEditors: hai_an 1207783846@qq.com
 $ *LastEditTime: 2023-06-09 18:16:53
 $ *FilePath: \jikeyuan-pc\src\App.js
 $ *Description:
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Layout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home"> 首页 </Link>
        <Link to="/login"> 登录 </Link>
        {/* 配置路由规则 */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* 404页面 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
