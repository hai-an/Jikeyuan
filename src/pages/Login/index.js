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
          <Form size="large" validateTrigger={['onBlur', 'onChange']}>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: '手机号不能为空',
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机格式错误,请重试!',
                  validateTrigger: 'onBlur',
                },
              ]}
            >
              <Input placeholder="请输入你的手机号" />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: '验证码不能为空',
                },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码必须是6位数字!',
                },
              ]}
            >
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
