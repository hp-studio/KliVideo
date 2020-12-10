import React, {useEffect, useRef} from 'react';
//引入依赖
import 'video.js/dist/video-js.css';
import 'videojs-flash';
import videojs from 'video.js';

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
    const {overwritePlayerOptions, style} = props;
    const videoSrc = 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4';
    const playerRef = useRef(null);
    const defaultPlayerOptions = {autoplay: false, muted: false, controls: true, fluid: false, language: 'zh'};
    useEffect(() => {
        const player = videojs(playerRef.current, {...overwritePlayerOptions, ...defaultPlayerOptions}, () => {
            player.src(videoSrc);
        });

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div data-vjs-player style={{...style, maxWidth: '100%'}}>
            <video ref={playerRef} className='video-js' playsInline />
        </div>
    );
};
