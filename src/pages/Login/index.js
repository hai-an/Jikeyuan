import React, { Component } from 'react'
import './index.less'
import { Button, Checkbox, Form, Input, Card } from 'antd'
import logo from '@/assets/logo.png'
// 发请求api
import { login as userLogin } from '@/api/user'
import { message } from 'antd'
import { Navigate } from 'react-router-dom'
export default class Login extends Component {
  state = { isPass: false, loading: false }
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />

          {this.isPass && <Navigate to="/" replace={true} />}

          {/* 表单 */}
          <Form
            name="basic"
            onFinish={this.onFinish}
            size="large"
            initialValues={{
              mobile: '13911111111',
              code: '246810',
              agree: true,
            }}
          >
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
              name="agree"
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
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={this.state.loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  /*******
   * @description: 表单登录-功能
   * @param {*} value 表单组件内接收的值
   * @return {*}
   */
  onFinish = async ({ mobile, code }) => {
    try {
      this.setState({ loading: true })
      const res = await userLogin(mobile, code)
      // 登录成功

      // 3.提示消息
      message.success('登录成功!', 1, () => {
        // 1.保存token
        localStorage.setItem('token', res.data.token)
        // 2.跳转到来源页面 或 首页

        // this.props.history.push('/')
        // this.navigate('/', { replace: true })
        this.setState({ isPass: true })
        console.log(res)
      })
    } catch (error) {
      message.warning(error.response?.data.message || '登录失败,请稍后再试!', 1)
      console.log(error)
    } finally {
      this.setState({ loading: false })
    }
  }
}
