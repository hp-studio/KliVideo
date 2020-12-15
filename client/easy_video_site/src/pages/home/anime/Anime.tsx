import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';

export const Anime = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '动漫');
    }, []);
    return (
        <div className='content' style={{padding: '1rem'}}>
            Anime
        </div>
    );
};
