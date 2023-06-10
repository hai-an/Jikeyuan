import React, { Component } from 'react'
import './index.less'
import { Button, Checkbox, Form, Input, Card } from 'antd'
import logo from '@/assets/logo.png'
export default class Login extends Component {
  /*******
   * @description: 表单登录-功能
   * @param {*} value 表单组件内接收的值
   * @return {*}
   */
  login = value => {
    console.log('value', value)
  }
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          {/* 表单 */}
          <Form name="basic" onFinish={this.login} size="large">
            <Form.Item
              name="mobile"
              validateTrigger={['onBlur', 'onChange']}
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

            <Form.Item
              name="agreer"
              valuePropName="checked"
              rules={[
                {
                  // 自定义校验规则
                  validator: (rule, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('请阅读协议并同意协议')),
                },
              ]}
            >
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
