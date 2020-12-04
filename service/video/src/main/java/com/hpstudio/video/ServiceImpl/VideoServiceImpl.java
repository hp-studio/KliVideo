package com.hpstudio.video.ServiceImpl;

import com.hpstudio.video.mapper.c2cMapper;
import dubboService.VideoService;
import org.apache.dubbo.config.annotation.DubboService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

/**
 * @author mawen
 * @date 2020/11/25 15:05
 * @email 455766076@qq.com
 * @description
 */
@DubboService
public class VideoServiceImpl implements VideoService {

    @Autowired
    private c2cMapper mapper;

    @Override
    public String dodo() {
        Map<String, Object> stringObjectMap = mapper.selectDefault();
        System.out.println(stringObjectMap.toString());
        return "video success";
    }
}
