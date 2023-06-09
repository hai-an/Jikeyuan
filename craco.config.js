/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-09 20:33:18
 $ *LastEditors: hai_an 1207783846@qq.com
 $ *LastEditTime: 2023-06-09 21:30:49
 $ *FilePath: \jikeyuan-pc\craco.config.js
 $ *Description:
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const CracoLessPlugin = require('craco-less')
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#00FFFF' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
