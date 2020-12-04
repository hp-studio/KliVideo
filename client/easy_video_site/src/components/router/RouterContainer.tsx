import React, {useState} from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IRootState} from '../../types/';
import * as pages from '../../pages';
interface IRoute {
    path: string;
    component: React.ComponentClass | React.FC | undefined;
    children?: IRoutesList;
    exact?: boolean;
    title?: string;
}
type IRoutesList = IRoute[];

/**
 * 渲染路由容器
 * @param props 传递参数
 */
export const RouterContainer: React.FC = props => {
    /**
     * 设置路由列表
     */
    const [IRoutesList] = useState<IRoutesList>([
        {
            path: '/',
            component: pages.Home,
            exact: true,
        },
        {
            path: '/login',
            component: pages.Login,
        },
    ]);

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

    return (
        <HashRouter>
            <Switch>{renderRoutes(IRoutesList)}</Switch>
        </HashRouter>
    );
};
