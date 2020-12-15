import {IAction, ISettingState} from '../../types';
import {Dispatch} from 'redux';
import {getSetting} from '../../api/';
import {changeTitle} from '../actions';

export const CHANGE_SETTING = 'CHANGE_SETTING';

/**
 * 设置系统设置（默认）.
 * @param dispatch dispatch方法.
 */
export const setSetting = async (dispatch: Dispatch): Promise<IAction | boolean> => {
    try {
        /**尝试请求默认设置 */
        const resData: ISettingState = await getSetting();
        /**设置默认标题 */
        changeTitle(dispatch, resData.defaultTitle);
        const action = {
            type: CHANGE_SETTING,
            payload: resData,
        };
        /**写入默认系统设置 */
        return dispatch(action);
    } catch (error) {
        /**请求失败 */
        console.log(error);
        return false;
    }
};
