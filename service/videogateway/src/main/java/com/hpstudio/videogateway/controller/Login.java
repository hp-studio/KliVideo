package com.hpstudio.videogateway.controller;

import com.hpstudio.videogateway.util.JWTUtil;
import constant.ResponseConstant;
import dubboService.UserService;
import entity.http.ResponseMessage;
import entity.system.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mawen
 * @date 2020/12/3 16:30
 * @email 455766076@qq.com
 * @description
 */
@RestController
@Slf4j
public class Login {
    @DubboReference(reconnect = "2000")
    private UserService userService;

    @PostMapping("login")
    public ResponseMessage login(@RequestBody User user) {
        try {
            User u = userService.getById(user.getId());
            if (u.getPassword().equals(user.getPassword())) {
                String token = JWTUtil.createToken(600000, user);
                return ResponseMessage.success(token, "登录成功");
            }
            return ResponseMessage.error(ResponseConstant.FAIL_CODE, "账号或密码错误");
        } catch (Exception e) {
            log.error(e.getMessage(),e);
            return ResponseMessage.error(ResponseConstant.FAIL_CODE, "系统出现故障了");
        }
    }
}
