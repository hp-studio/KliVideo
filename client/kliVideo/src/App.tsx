import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './App.less';
import {RouterContainer} from './router';
import {LoadingBox} from './components';
import {setSetting} from './store/actions';
import {toNotFound} from './utils';

/**
 * 渲染根组件
 */
const App: React.FC = () => {
    const [initComplete, setInitComplete] = useState(false);
    const counter = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        initApp();
    }, []);
    /**
     * 初始化系统
     */
    const initApp = async () => {
        document.title = '加载中';
        if (await setSetting(dispatch)) {
            setInitComplete(true);
        } else {
            /**初始化失败 */
            toNotFound();
        }
    };
    return initComplete ? <RouterContainer /> : <LoadingBox size={'2rem'} type='fullWindow' />;
};

export default App;
