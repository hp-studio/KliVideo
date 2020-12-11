import React, {useEffect} from 'react';
import './Login.scss';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';

interface ILoginProps {}
export const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        changeSubtitle(dispatch, '登陆');
    }, []);
    const onLogin = () => {
        localStorage.setItem('userInfo', 'true');
        history.push({
            pathname: '/',
        });
    };
    return (
        <div className='login'>
            <Button onClick={onLogin}>登入</Button>
        </div>
    );
};
