import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RouterContainer} from './components';

/**
 * 渲染根组件
 */
const App: React.FC = () => {
    const renderRouterContainer: () => JSX.Element = () => {
        return <RouterContainer />;
    };
    return <div>{renderRouterContainer()}</div>;
};

export default App;
