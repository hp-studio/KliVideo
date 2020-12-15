import {ISettingState, IRoutesList} from '../types';
import * as pages from '../pages';

/**
 * 获取系统设置.
 */
export const getSetting = (): Promise<ISettingState> => {
    return new Promise<ISettingState>((resolve, reject) => {
        setTimeout(() => {
            const resData = {defaultTitle: 'hilivideo'};
            resolve(resData);
        }, 500);
        // reject();
    });
};

/**
 * 获取路由.
 * @param {string} page 页面名称.
 * @requires any[] 路由表.
 */
export const getRoutes = (page?: string): any[] => {
    if (page === 'home') {
        return [
            {
                path: '/',
                component: pages['HomeIndex'],
                exact: true,
            },
            {
                path: '/movie',
                component: pages['Movie'],
                exact: true,
            },
            {
                path: '/teleplay',
                component: pages['Teleplay'],
                exact: true,
            },
            {
                path: '/live',
                component: pages['Live'],
                exact: true,
            },
            {
                path: '/anime',
                component: pages['Anime'],
                exact: true,
            },
            {
                path: '/show',
                component: pages['Show'],
                exact: true,
            },
            {
                path: '/list',
                component: pages['List'],
                exact: true,
            },
        ];
    } else
        return [
            {
                path: '/login',
                component: pages['Login'],
                exact: true,
            },
            {
                path: '/',
                component: pages['Home'],
            },
        ];
};
