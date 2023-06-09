/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-09 17:39:51
 $ *LastEditors: hai_an 1207783846@qq.com
 $ *LastEditTime: 2023-06-09 18:03:49
 $ *FilePath: \jikeyuan-pc\src\pages\NotFound\index.js
 $ *Description: 404 页面
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'

export default class NOtFound extends Component {
  render() {
    return (
      <div>
        <h2>404 页面</h2>
        <h4>您搜索的页面不存在!</h4>
        <h5>
          <a href="/home">点击去往首页</a>
        </h5>
      </div>
    )
  }
}
