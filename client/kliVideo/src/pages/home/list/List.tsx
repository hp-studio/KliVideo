import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';

export const List = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '番表');
    }, []);
    return (
        <div className='content' style={{padding: '1rem'}}>
            List！
        </div>
    );
};
