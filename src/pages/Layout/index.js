/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-09 17:09:37
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-14 18:31:39
 * @FilePath: \jikeyuan-pc\src\pages\Layout\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import { DiffOutlined, EditOutlined, LogoutOutlined, HomeOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import styles from './index.module.less'
const { Header, Content, Sider } = Layout
// 分离layout的侧边栏
const tag = ['数据概览', '内容管理', '发布文章']
const siderList = [HomeOutlined, DiffOutlined, EditOutlined].map((icon, index) => {
    const key = String(index + 1)
    return {
        key,
        icon: React.createElement(icon),
        label: tag[index],
    }
})
export default class LayoutComponent extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Layout>
                    <Header className="header">
                        <div className="logo pro" />

                        <div className="profile">
                            <span>用户名</span>
                            <span>
                                <LogoutOutlined />
                                退出
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
                            <Content className="site-layout-background">我是王荣国</Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
