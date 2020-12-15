import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';

export const Movie = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '电影');
    }, []);
    return (
        <div className='content' style={{padding: '1rem'}}>
            <VideoPlayer />
        </div>
    );
};
