export interface IAction<T = any> {
    type: string;
    payload?: T;
}
export interface IUserState {}
export interface IRuntimeState {
    title: string;
    subTitle: string;
}
export interface ISettingState {
    title: string;
}
export interface IRootState {
    user: IUserState;
    setting: ISettingState;
}
