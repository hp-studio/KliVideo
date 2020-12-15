import React, {useEffect, useRef} from 'react';
import DPlayer, {DPlayerOptions} from 'dplayer';

interface IVideoPlayerProps {
    style?: React.CSSProperties | undefined;
}

/**
 * 播放器组件
 * @param props 传递参数
 */
export const VideoPlayer: React.FC<IVideoPlayerProps> = (props: IVideoPlayerProps) => {
    const playerRef = useRef(null);

    /**
     * 初始化播放器
     */
    const initPlayer = (): DPlayer => {
        const playerOptions: DPlayerOptions = {
            container: playerRef.current,
            video: {
                defaultQuality: 1,
                url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
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
            // danmaku: {
            //     id: 'test',
            //     api: 'https://api.prprpr.me/dplayer/',
            // },
        };
        return new DPlayer(playerOptions);
    };
    useEffect(() => {
        const dp: DPlayer = initPlayer();

        return () => {
            dp.destroy();
        };
    }, []);

    return <div ref={playerRef}></div>;
};
