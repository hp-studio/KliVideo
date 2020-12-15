export interface IAction<T = any> {
    type: string;
    payload?: T;
}
export interface IUserState {}
export interface IRuntimeState {
    title: string;
    subTitle: string;
    separator: string;
}
export interface ISettingState {
    defaultTitle: string;
}
export interface IRootState {
    user: IUserState;
    setting: ISettingState;
}
