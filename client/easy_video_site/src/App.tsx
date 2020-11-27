import React from 'react';
import './App.css';
import {ReduxContainer, RouterContainer} from './components';

/**
 * 渲染根组件
 */
const App: React.FC = () => {
    /**
     * 渲染路由容器
     */
    const renderRouterContainer = (): JSX.Element => {
        return <RouterContainer />;
    };
    /**
     * 渲染Redux容器
     */
    const renderReduxContainer = (): JSX.Element => {
        return <ReduxContainer>{renderRouterContainer()}</ReduxContainer>;
    };
    return <div className={'app'}>{renderReduxContainer()}</div>;
};

export default App;
