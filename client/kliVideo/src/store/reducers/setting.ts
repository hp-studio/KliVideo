import {IAction, ISettingState} from '../../types';
import * as actions from '../actions/';
/**
 * 管理系统设置的reducer
 */
const settingState: ISettingState = {
    defaultTitle: '',
};

export const settingReducer = (state = settingState, action: IAction): ISettingState => {
    switch (action.type) {
        case actions.CHANGE_SETTING:
            const setting = action.payload;
            return {...state, ...setting};
        default:
            return state;
    }
};
