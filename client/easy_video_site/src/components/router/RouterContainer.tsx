import React, {useState} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import {Login} from '../../pages';

type RouteListItem = {
    path: string;
    component: React.ComponentClass | React.FC | undefined;
    children?: RouteList;
};
type RouteList = RouteListItem[];

/**
 * 渲染路由容器
 * @param props 传递参数
 */
export const RouterContainer: React.FC = props => {
    /**
     * 设置路由列表
     */
    const [routeList] = useState<RouteList>([
        {
            path: '/login',
            component: Login,
        },
    ]);
    /**
     * 渲染路由列表
     * @param _routeList 路由数组
     */
    const renderRoutes: (routelist: RouteList) => JSX.Element[] = _routeList =>
        _routeList.map(item => (
            <Route path={item.path} component={item.component} key={item.path}>
                {item.children && item.children.length > 0 && renderRoutes(item.children)}
            </Route>
        ));

    return <HashRouter>{renderRoutes(routeList)}</HashRouter>;
};
