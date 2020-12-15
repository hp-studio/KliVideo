import React, {useEffect} from 'react';
import './Login.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {useHistory} from 'react-router-dom';
import {Button, Checkbox, Divider, Form, Input, Space} from 'antd';
import {QqOutlined, WechatOutlined, WeiboOutlined, YoutubeOutlined, TwitterOutlined} from '@ant-design/icons';

/**
 * 渲染登录页
 */
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        changeSubtitle(dispatch, '登录');
    }, []);

    /**
     * 渲染登录表单
     */
    const renderLoginForm = () => {
        const initialValues = {username: '', password: '', remember: true};
        const onLogin = () => {
            localStorage.setItem('userInfo', 'true');
            history.push({
                pathname: '/',
            });
        };
        /**
         * 渲染其他登录途径
         */
        const renderOtherWays = () => {
            return (
                <div className='loginForm-otherWays'>
                    <a
                        href='https://www.qq.com'
                        className='loginForm-otherWays-icon'
                        target='_blank'
                        title='QQ'
                        rel='nofollow noopener noreferrer'>
                        <QqOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='loginForm-otherWays-icon'
                        target='_blank'
                        title='微信'
                        rel='nofollow noopener noreferrer'>
                        <WechatOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='loginForm-otherWays-icon'
                        target='_blank'
                        title='微博'
                        rel='nofollow noopener noreferrer'>
                        <WeiboOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='loginForm-otherWays-icon'
                        target='_blank'
                        title='Youtube'
                        rel='nofollow noopener noreferrer'>
                        <YoutubeOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='loginForm-otherWays-icon'
                        target='_blank'
                        title='Twitter'
                        rel='nofollow noopener noreferrer'>
                        <TwitterOutlined />
                    </a>
                </div>
            );
        };
        return (
            <Form
                colon={false}
                labelCol={{span: 4}}
                labelAlign='left'
                name='loginForm'
                initialValues={initialValues}
                onFinish={onLogin}>
                <div className='loginForm-title'>KliVideo</div>
                <Form.Item label='用户名' name='username'>
                    <Input bordered={false} placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item label='密码' name='password'>
                    <Input.Password bordered={false} placeholder='请输入密码' />
                </Form.Item>

                <Form.Item name='remember' valuePropName='checked'>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Space direction='vertical' style={{width: '100%'}}>
                        <Button type='primary' block htmlType='submit'>
                            登录
                        </Button>
                        <Button block htmlType='submit'>
                            注册
                        </Button>
                    </Space>

                    <Divider />
                    {renderOtherWays()}
                </Form.Item>
            </Form>
        );
    };
    return (
        <div className='login'>
            <div className='loginForm'>{renderLoginForm()}</div>
        </div>
    );
};
