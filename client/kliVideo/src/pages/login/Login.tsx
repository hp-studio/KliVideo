import React, {useEffect} from 'react';
import './Login.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {useHistory} from 'react-router-dom';
import {Button, Checkbox, Form, Input} from 'antd';

/**
 * 渲染登陆页
 */
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        changeSubtitle(dispatch, '登陆');
    }, []);

    /**
     * 渲染登陆表单
     */
    const renderLoginForm = () => {
        const initialValues = {username: '', password: '', remember: true};
        const onLogin = () => {
            localStorage.setItem('userInfo', 'true');
            history.push({
                pathname: '/',
            });
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
                    <Button type='primary' block htmlType='submit'>
                        登入
                    </Button>
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
