import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {RouterContainer} from '../../router';

import {Header} from './header';

export const Home: React.FC = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '首页');
    }, []);
    return (
        <div>
            <Header />
            <a href='#/login'>回到login</a>
            <a href='#/a'>a</a>
            <a href='#/b'>b</a>
            <RouterContainer page='home' />
        </div>
    );
};
