import React, { useEffect, useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Card, message } from 'antd'
import styles from './index.module.less'
import logo from '@/assets/logo.png'
// 发请求api
import { login as userLogin } from '@/api/user'
import { setToken } from '@/utils/storage'

const useLogin = from => {
    const [isPass, setIsPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const navigateCallback = useCallback(navigate, [navigate])

    /*******
     * @description: 表单登录-功能
     * @param {*} value 表单组件内接收的值
     * @return {*}
     */
    const onFinish = async ({ mobile, code }) => {
        console.log(mobile, code, from)
        try {
            setLoading(true)
            const res = await userLogin(mobile, code)
            // 登录成功
            // 3.提示消息
            message.success('登录成功!', 1, async () => {
                // 1.保存token
                setToken(res.data.token)
                // 2.跟新状态
                setIsPass(true)
            })
        } catch (error) {
            message.warning(error.response?.data.message || '登录失败,请稍后再试!', 1)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    // 3.跳转到来源页面
    useEffect(() => {
        // isPass为true,且当前页面不为 login => 来源页面
        if (isPass && from && from !== '/login') {
            console.log('4')

            navigateCallback(from, { replace: true })
        }
        // isPass为true,且差处位 /login => 跟新状态
        else if (isPass & (from === '/login')) {
            console.log('5')
            navigateCallback('/home', { replace: true })
        }
    }, [isPass, from, navigateCallback])
    return { onFinish, loading }
}

const Login = props => {
    const location = useLocation()
    const from = location.state && location.state.from
    const { loading, onFinish } = useLogin(from)

    return (
        <div className={styles.login}>
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />

                {/* {isPass && navigate('/home')} */}

                <Form
                    name="basic"
                    onFinish={values => onFinish(values)}
                    size="large"
                    initialValues={{
                        mobile: '13911111111',
                        code: '246810',
                        agree: true,
                    }}>
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
                        ]}>
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
                        ]}>
                        <input placeholder="请输入验证码" />
                    </Form.Item>

                    <Form.Item
                        name="agree"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (rule, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('请阅读协议并同意协议')),
                            },
                        ]}>
                        <Checkbox>我已阅读并同意 [隐私协议] 和 [用户协议]</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login
