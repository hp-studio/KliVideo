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
}

export const VideoPlayer = (props: IVideoPlayerProps) => {
    const {overwritePlayerOptions} = props;
    const videoSrc = 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4';
    const playerRef = useRef(null);
    const defaultPlayerOptions = {autoplay: true, muted: true};
    useEffect(() => {
        const player = videojs(playerRef.current, overwritePlayerOptions || defaultPlayerOptions, () => {
            player.src(videoSrc);
        });

        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div data-vjs-player>
            <video ref={playerRef} className='video-js vjs-16-9' playsInline />
        </div>
    );
};
