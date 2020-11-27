import {IAction} from '../../types';
type TUserState = {};
const userState = {};
export default (state = userState, action: IAction): TUserState => {
    switch (action.type) {
        default:
            return state;
    }
};
