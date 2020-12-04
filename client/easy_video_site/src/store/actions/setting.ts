import {IAction} from '../../types';

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_SUB_TITLE = 'CHANGE_SUB_TITLE';
export const CHANGE_SETTING = 'CHANGE_SETTING';

export const changeTitle = (title: string): IAction<string> => {
    return {
        type: CHANGE_TITLE,
        payload: title,
    };
};
export const changeSubtitle = (subTitle: string): IAction<string> => {
    return {
        type: CHANGE_SUB_TITLE,
        payload: subTitle,
    };
};
export const changeSetting = (setting: object): IAction<object> => {
    return {
        type: CHANGE_SETTING,
        payload: setting,
    };
};
