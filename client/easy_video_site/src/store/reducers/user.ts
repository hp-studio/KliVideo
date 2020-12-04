import {IAction, IUserState} from '../../types';
const userState = {};
export default (state = userState, action: IAction): IUserState => {
    switch (action.type) {
        default:
            return state;
    }
};
