import {IAction, IRuntimeState} from '../../types';
import * as actions from '../actions/';
/**
 * 管理系统运行状态的reducer
 */
const settingState: IRuntimeState = {
    title: '测试视频网站',
    subTitle: '',
};

/**
 * 修改浏览器标题.
 * @param title 标题内容.
 */
const changeTitles = (title: string): void => {
    document.title = title;
};

export default (state = settingState, action: IAction): IRuntimeState => {
    switch (action.type) {
        case actions.CHANGE_TITLE:
            const title = action.payload;
            changeTitles(title + state.subTitle);
            return {...state, title};
        case actions.CHANGE_SUB_TITLE:
            const subTitle = action.payload;
            changeTitles(state.title + subTitle);
            return {...state, subTitle: action.payload};
        default:
            return state;
    }
};
