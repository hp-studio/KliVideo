import {IAction} from '../../types';
import {Dispatch} from 'redux';

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_SUB_TITLE = 'CHANGE_SUB_TITLE';

/**
 * 修改主标题.
 * @param dispatch dispatch方法.
 * @param title 标题名.
 */
export const changeTitle = (dispatch: Dispatch, title: string): IAction<string> => {
    const action = {
        type: CHANGE_TITLE,
        payload: title,
    };
    return dispatch(action);
};

/**
 * 修改副标题.
 * @param dispatch dispatch方法.
 * @param title 标题名.
 */
export const changeSubtitle = (dispatch: Dispatch, subTitle: string): IAction<string> => {
    const action = {
        type: CHANGE_SUB_TITLE,
        payload: subTitle,
    };
    return dispatch(action);
};
