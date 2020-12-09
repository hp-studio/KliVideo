import React from 'react';
import {Menu, Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = props => {
    return (
        <div className='header'>
            <div className='logo'>haliVideo</div>
            <ul className='navigator'>
                <Link to='/'>
                    <li className='navigatorItem'>首页</li>
                </Link>
                <Link to='/a'>
                    <li className='navigatorItem'>电影</li>
                </Link>
                <Link to='/b'>
                    <li className='navigatorItem'>电视剧</li>
                </Link>
                <li className='navigatorItem'>直播</li>
                <li className='navigatorItem'>动漫</li>
                <li className='navigatorItem'>综艺</li>
                <li className='navigatorItem'>番表</li>
            </ul>
            <div className='other'>other</div>
        </div>
    );
};
