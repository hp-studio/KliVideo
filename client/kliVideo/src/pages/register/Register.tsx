import React, {useEffect} from 'react';
import './Register.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {Link, useHistory} from 'react-router-dom';
import {Button, Checkbox, Divider, Form, Input, Space} from 'antd';
import {QqOutlined, WechatOutlined, WeiboOutlined, YoutubeOutlined, TwitterOutlined} from '@ant-design/icons';

export const Register: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        changeSubtitle(dispatch, '登录');
    }, []);

    /**
     * 渲染登录表单
     */
    const renderregisterForm = () => {
        const initialValues = {username: '', phone: '', password: '', passwordCheck: '', email: ''};
        const onRegister = () => {
            history.push({
                pathname: '/login',
            });
        };
        /**
         * 渲染其他登录途径
         */
        const renderOtherWays = () => {
            return (
                <div className='registerForm-otherWays'>
                    <a
                        href='https://www.qq.com'
                        className='registerForm-otherWays-icon'
                        target='_blank'
                        title='QQ'
                        rel='nofollow noopener noreferrer'>
                        <QqOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='registerForm-otherWays-icon'
                        target='_blank'
                        title='微信'
                        rel='nofollow noopener noreferrer'>
                        <WechatOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='registerForm-otherWays-icon'
                        target='_blank'
                        title='微博'
                        rel='nofollow noopener noreferrer'>
                        <WeiboOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='registerForm-otherWays-icon'
                        target='_blank'
                        title='Youtube'
                        rel='nofollow noopener noreferrer'>
                        <YoutubeOutlined />
                    </a>
                    <a
                        href='https://www.qq.com'
                        className='registerForm-otherWays-icon'
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
                labelCol={{span: 6}}
                labelAlign='left'
                name='registerForm'
                initialValues={initialValues}
                onFinish={onRegister}>
                <div className='registerForm-title'>注册KliVideo</div>
                <Form.Item label='用户名' name='username'>
                    <Input bordered={false} placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item label='手机号' name='phone'>
                    <Input bordered={false} placeholder='请输入手机号' />
                </Form.Item>

                <Form.Item label='密码' name='password'>
                    <Input.Password bordered={false} placeholder='请输入密码' />
                </Form.Item>
                <Form.Item label='确认密码' name='passwordCheck'>
                    <Input.Password bordered={false} placeholder='请再次输入密码' />
                </Form.Item>
                <Form.Item label='电子邮箱' name='email'>
                    <Input bordered={false} placeholder='请再次输入电子邮箱' />
                </Form.Item>
                <Form.Item>
                    <Space direction='vertical' style={{width: '100%'}}>
                        <Button type='primary' block htmlType='submit'>
                            注册
                        </Button>
                        <Button block>
                            <Link to='/login'>返回</Link>
                        </Button>
                    </Space>

                    <Divider />
                    {renderOtherWays()}
                </Form.Item>
            </Form>
        );
    };
    return (
        <div className='register'>
            <div className='registerForm'>{renderregisterForm()}</div>
        </div>
    );
};
