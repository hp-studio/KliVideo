import React from 'react';
import {Avatar, Popover, Input, Button, Descriptions} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import './Header.scss';
const {Search} = Input;

/**
 * 渲染头部
 * @param props 传递参数
 */
export const Header: React.FC = () => {
    const history = useHistory();

    const onSearch = () => {};
    /**
     * 渲染搜索框
     */
    const renderSearch = () => {
        return (
            <Search
                placeholder='请输入搜索内容'
                style={{margin: '0 1rem'}}
                allowClear
                enterButton
                onSearch={onSearch}
            />
        );
    };
    const logout = () => {
        localStorage.removeItem('userInfo');
        history.replace('/');
    };
    /**
     * 渲染用户模块
     */
    const renderUser = () => {
        const userInfo = localStorage.getItem('userInfo');
        const userInfoMenu = (
            <div>
                <Button onClick={logout}>登出</Button>
            </div>
        );
        if (userInfo) {
            return (
                <Popover placement='bottomRight' content={userInfoMenu} title='ABC'>
                    <div style={{cursor: 'pointer'}}>
                        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                    </div>
                </Popover>
            );
        }
        return (
            <div>
                <Link to='/login' title='请登录'>
                    <Avatar icon={<UserOutlined />} />
                </Link>
            </div>
        );
    };
    return (
        <div className='header'>
            <div className='logo'>KliVideo</div>
            <ul className='navigator'>
                <Link to='/'>
                    <li className='navigatorItem'>首页</li>
                </Link>
                <Link to='/movie'>
                    <li className='navigatorItem'>电影</li>
                </Link>
                <Link to='/teleplay'>
                    <li className='navigatorItem'>电视剧</li>
                </Link>
                <Link to='/live'>
                    <li className='navigatorItem'>直播</li>
                </Link>
                <Link to='/anime'>
                    <li className='navigatorItem'>动漫</li>
                </Link>
                <Link to='/show'>
                    <li className='navigatorItem'>综艺</li>
                </Link>
                <Link to='/list'>
                    <li className='navigatorItem'>番表</li>
                </Link>
            </ul>
            <div className='other'>
                {renderSearch()}
                {renderUser()}
            </div>
        </div>
    );
};
