import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {RouterContainer} from '../../router';

import {Header} from './header';
import {Copyright} from './copyright';
import './Home.scss';

export const HomeIndex: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '首页');
    }, []);
    return <div className='content'>homeIndex</div>;
};

export const Home: React.FC = props => {
    return (
        <div className='home'>
            <Header />
            <RouterContainer page='home' />
            <Copyright />
        </div>
    );
};
