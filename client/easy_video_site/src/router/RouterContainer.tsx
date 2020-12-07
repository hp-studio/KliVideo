import React, {useState} from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getRoutes} from '../api';
import {IRouterContainerProps, IRoutesList} from '../types';

/**
 * 渲染路由容器
 * @param {object} props 传递参数.
 * @param {string} props.page 页面名称（渲染路由）.
 */
export const RouterContainer: React.FC<IRouterContainerProps> = (props: IRouterContainerProps) => {
    const page = props.page;
    /**
     * 获取路由列表
     */
    const [IRoutesList] = useState<IRoutesList>(getRoutes(page));

    /**
     * 渲染路由列表
     * @param {IRoutesList} routesList  路由数组
     */
    const renderRoutes: (IRoutesList: IRoutesList) => JSX.Element[] = routesList =>
        routesList.map(item => (
            <Route exact={item.exact || false} path={item.path} component={item.component} key={item.path}>
                {item.children && item.children.length > 0 && renderRoutes(item.children)}
            </Route>
        ));

    if (page) {
        return <Switch>{renderRoutes(IRoutesList)}</Switch>;
    } else {
        return (
            <HashRouter>
                <Switch>{renderRoutes(IRoutesList)}</Switch>
            </HashRouter>
        );
    }
};
