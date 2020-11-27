import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
interface IProps {
    children: any;
}
const ReduxContainer: React.FC<IProps> = (props: IProps) => {
    return <Provider store={store}>{props.children}</Provider>;
};
export default ReduxContainer;
