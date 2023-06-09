import React, { Component } from 'react'
import './index.less'
import { Button, Checkbox, Form, Input, Card } from 'antd'
import logo from '@/assets/logo.png'
export default class Login extends Component {
  // const onFinish = values => {
  //   console.log('Success:', values)
  // }
  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo)
  // }
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          {/* 表单 */}
          <Form
            size="large"
            name="basic"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <Input placeholder="请输入你的手机号" />
            </Form.Item>

            <Form.Item>
              <input placeholder="请输入验证码" />
            </Form.Item>

            <Form.Item valueRropName="checked">
              <Checkbox>我已阅读并同意 [隐私协议] 和 [用户协议]</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
