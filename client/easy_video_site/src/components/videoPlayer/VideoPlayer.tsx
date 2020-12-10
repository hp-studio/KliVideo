import React, {useEffect, useRef} from 'react';
import DPlayer from 'dplayer';

interface IPlayerOptions {
    autoplay?: boolean;
    muted?: boolean;
}

interface IVideoPlayerProps {
    overwritePlayerOptions?: IPlayerOptions;
    style?: React.CSSProperties | undefined;
}

/**
 * 播放器组件
 * @param props 传递参数
 */
export const VideoPlayer = (props: IVideoPlayerProps) => {
    const playerRef = useRef(null);
    const {overwritePlayerOptions, style} = props;
    const playerOptions = {
        container: playerRef.current,
        video: {
            url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
            defaultQuality: 1,
            quality: [
                {
                    name: '720P',
                    url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
                    type: 'mp4',
                },
                {
                    name: '1080P',
                    url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
                    type: 'mp4',
                },
            ],
        },
        autoplay: true,
        theme: '#36cfc9',
        danmaku: {
            id: 'test',
            api: 'https://api.prprpr.me/dplayer/',
        },
    };
    /**
     * 初始化播放器
     * @param playerOptions
     */
    const initPlayer = (playerOptions: any) => {
        return new DPlayer(playerOptions);
    };
    useEffect(() => {
        const dp = initPlayer(playerOptions);

        return () => {
            dp.destroy();
        };
    }, []);

    return <div ref={playerRef}></div>;
};
