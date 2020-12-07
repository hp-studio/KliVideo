import {IAction, IRuntimeState} from '../../types';
import * as actions from '../actions/';
/**
 * 管理系统运行状态的reducer
 */
const settingState: IRuntimeState = {
    title: '测试视频网站',
    subTitle: '',
    separator: '-',
};

/**
 * 修改浏览器标题.
 * @param state IRuntimeState 当前最新state.
 */
const changeTitles = (state: IRuntimeState): void => {
    document.title = `${state.title}${state.subTitle && state.separator + state.subTitle}`;
};

export const runtimeReducer = (state = settingState, action: IAction): IRuntimeState => {
    let newState: IRuntimeState;
    switch (action.type) {
        case actions.CHANGE_TITLE:
            const title = action.payload;
            newState = {...state, title};
            changeTitles(newState);
            return newState;
        case actions.CHANGE_SUB_TITLE:
            const subTitle = action.payload;
            newState = {...state, subTitle: action.payload};
            changeTitles(newState);
            return newState;
        default:
            return state;
    }
};
