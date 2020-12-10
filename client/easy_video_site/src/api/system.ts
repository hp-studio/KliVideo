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
                path: '/a',
                component: pages['A'],
                exact: true,
            },
            {
                path: '/b',
                component: pages['B'],
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
