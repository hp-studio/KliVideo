package com.hpstudio.videobarrage.serviceImpl;

import dubboService.VideoBarrageService;
import org.apache.dubbo.config.annotation.DubboService;

/**
 * @author mawen
 * @date 2020/11/25 15:07
 * @email 455766076@qq.com
 * @description
 */
@DubboService
public class VideoBarrageServiceImpl implements VideoBarrageService {
    @Override
    public String dodo() {
        return "barrage success";
    }
}
