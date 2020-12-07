import React, {useEffect} from 'react';
import './Login.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';

export const Login: React.FC = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        changeSubtitle(dispatch, '登陆');
    }, []);
    return (
        <div className='login'>
            login
            <a href='#/'>登入</a>
        </div>
    );
};
