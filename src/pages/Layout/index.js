/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-09 17:09:37
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-24 21:18:33
 * @FilePath: \jikeyuan-pc\src\pages\Layout\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import { DiffOutlined, EditOutlined, LogoutOutlined, HomeOutlined } from '@ant-design/icons'
import { Layout, Menu, Popconfirm, message } from 'antd'
import styles from './index.module.less'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { removeToken } from '@/utils/storage'

// 解构出 layout页面结构
const { Header, Content, Sider } = Layout

// 使用 历史记录

// 分离layout的侧边栏
const tag = ['数据概览', '内容管理', '发布文章']
const routerPath = ['/home', '/home/article', '/home/publish']
const siderList = [HomeOutlined, DiffOutlined, EditOutlined].map((icon, index) => {
    const key = String(index + 1)
    return {
        key,
        icon: React.createElement(icon),
        label: <Link to={routerPath[index]}>{tag[index]}</Link>,
    }
})

class LayoutComponent extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <div className="profile">
                            <span>用户名</span>
                            <span>
                                <ToLoginBtn />
                            </span>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['1']}
                                style={{
                                    height: '100%',
                                    borderRight: 0,
                                }}
                                items={siderList}
                            />
                        </Sider>
                        <Layout style={{ padding: '24px' }}>
                            <Content className="site-layout-background">
                                {/* 显示页面 */}
                                <Outlet />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
// TODO: 1.退出 <按钮组件> => 控制 跳转login页面
function ToLoginBtn() {
    const navigate = useNavigate()
    const onConfirm = () => {
        // console.log('确定退函数')
        // 0.清除token
        // 1.跳转到登录页
        // 3.操作成功提示
        // localStorage.removeItem('token')
        removeToken()
        navigate('/login')
        message.success('您已成功退出!')
    }
    // navigate('/login')
    return (
        <Popconfirm
            placement="topRight"
            title="确定要退出系统吗?"
            onConfirm={onConfirm}
            okText="确定"
            cancelText="取消">
            <LogoutOutlined /> 退出
        </Popconfirm>
    )
}
export default LayoutComponent

// export default LayoutComponent
