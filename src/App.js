/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-09 16:39:41
 $ *LastEditors:hai_an 1207783846@qq.com
 $ *LastEditTime:2023-06-13 14:12:37
 $ *FilePath:\jikeyuan-pc\src\App.js
 $ *Description:
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { Outlet } from 'react-router-dom'
function App() {
    return (
        <div className="App">
            {/* 显示路由页面 */}
            <Outlet></Outlet>
        </div>
    )
}

export default App
