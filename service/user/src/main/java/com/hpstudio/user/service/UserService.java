package com.hpstudio.user.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hpstudio.user.mapper.UserMapper;
import entity.system.User;
import org.apache.dubbo.config.annotation.DubboService;
import org.springframework.stereotype.Service;

/**
 * @author mawen
 * @date 2020/12/3 9:26
 * @email 455766076@qq.com
 * @description
 */
@DubboService
public class UserService extends ServiceImpl<UserMapper, User> implements dubboService.UserService {
    @Override
    public User getById(Integer id) {
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("id", id);
        User user = getOne(userQueryWrapper);
        return user;
    }

    @Override
    public boolean register(User user) {
        return save(user);
    }
}
