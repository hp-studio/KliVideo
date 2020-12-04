import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeSubtitle} from '../../store/actions';
import {Header} from './header';

const Home: React.FC = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '-首页');
    }, []);
    return (
        <div>
            Home
            <a href='#/login'>回到login</a>
        </div>
    );
};
export default Home;
