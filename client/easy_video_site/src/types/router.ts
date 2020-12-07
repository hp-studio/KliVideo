export interface IRoute {
    path: string;
    component: React.ComponentClass | React.FC | undefined;
    children?: IRoutesList;
    exact?: boolean;
    title?: string;
}
export type IRoutesList = IRoute[];

export interface IRouterContainerProps {
    page?: string;
}
