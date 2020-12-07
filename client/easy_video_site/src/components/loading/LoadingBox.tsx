import React from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

import './LoadingBox.scss';

interface IProps {
    type: string;
    size: number | string;
    tip?: string;
}
/**
 * 加载容器 可多用途.
 * @param props
 * 参数:
 * type:类型.
 * size:大小.
 */
export const LoadingBox: React.FC<IProps> = (props: IProps) => {
    const {type, size, tip} = props;
    const antIcon = <LoadingOutlined style={{fontSize: size}} spin />;
    const renderSpin = () => {
        return <Spin tip={tip || ''} indicator={antIcon} />;
    };
    switch (type) {
        case 'fullDiv':
            return <div className={'loadingBox loadingBox-fullDiv'}>{renderSpin()}</div>;
        case 'fullWindow':
            return <div className={'loadingBox loadingBox-fullWindow'}>{renderSpin()}</div>;
        default:
            return null;
    }
};
