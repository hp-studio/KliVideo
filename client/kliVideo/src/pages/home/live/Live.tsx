import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';

export const Live = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '直播');
    }, []);
    return (
        <div className='content' style={{padding: '1rem'}}>
            Show
        </div>
    );
};
