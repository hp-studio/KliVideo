import {ISettingState} from '../types';
export const getSetting = () => {
    return new Promise<ISettingState>((resolve, reject) => {
        setTimeout(() => {
            const resData = {title: 'hilivideo'};
            resolve(resData);
        }, 3000);
        // reject();
    });
};
