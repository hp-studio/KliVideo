import {IAction, ISettingState} from '../../types';
import * as actions from '../actions/';
/**
 * 管理系统设置的reducer
 */
const settingState: ISettingState = {
    title: '',
};

export default (state = settingState, action: IAction): ISettingState => {
    switch (action.type) {
        case actions.CHANGE_SETTING:
            const setting = action.payload;
            return Object.assign(state, setting);
        default:
            return state;
    }
};
