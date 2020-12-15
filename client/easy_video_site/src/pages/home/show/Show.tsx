import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';

export const Show = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '综艺');
    }, []);
    return (
        <div className='content' style={{padding: '1rem'}}>
            Show
        </div>
    );
};
