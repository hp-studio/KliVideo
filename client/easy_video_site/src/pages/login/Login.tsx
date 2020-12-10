import React, {useEffect} from 'react';
import './Login.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export const Login: React.FC = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        changeSubtitle(dispatch, '登陆');
    }, []);
    return (
        <div className='login'>
            login
            <Link to='/'>
                <Button>登入</Button>
            </Link>
        </div>
    );
};
