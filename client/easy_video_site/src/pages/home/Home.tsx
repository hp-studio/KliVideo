import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {RouterContainer} from '../../router';

import {Header} from './header';
import {Copyright} from './copyright';

export const Home: React.FC = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '首页');
    }, []);
    return (
        <div>
            <Header />
            <RouterContainer page='home' />
            <Copyright />
        </div>
    );
};
