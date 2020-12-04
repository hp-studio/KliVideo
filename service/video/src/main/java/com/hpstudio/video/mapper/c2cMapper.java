package com.hpstudio.video.mapper;

import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @author mawen
 * @date 2020/11/26 10:52
 * @email 455766076@qq.com
 * @description
 */
@Repository
public interface c2cMapper {

    Map<String, Object> selectDefault();
}
