import {IAction, IUserState} from '../../types';
const userState = {};
export const userReducer = (state = userState, action: IAction): IUserState => {
    switch (action.type) {
        default:
            return state;
    }
};
