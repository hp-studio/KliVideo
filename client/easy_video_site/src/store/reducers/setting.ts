import {IAction, ISettingState} from '../../types';
import * as actions from '../actions/';
/**
 * 管理系统设置的reducer
 */
const settingState: ISettingState = {
    title: '测试视频网站',
    subTitle: '',
};
export default (state = settingState, action: IAction): ISettingState => {
    switch (action.type) {
        case actions.CHANGE_TITLE:
            const title = action.payload;
            document.title = title + state.subTitle;
            return {...state, title};
        case actions.CHANGE_SUB_TITLE:
            const subTitle = action.payload;
            document.title = state.title + subTitle;
            return {...state, subTitle: action.payload};
        case actions.CHANGE_SETTING:
            const setting = action.payload;
            return Object.assign(state, setting);
        default:
            return state;
    }
};
