package com.hpstudio.consumer.controller;

import constant.ResponseConstant;
import dubboService.UserService;
import entity.http.ResponseMessage;
import entity.system.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author mawen
 * @date 2020/12/3 11:36
 * @email 455766076@qq.com
 * @description
 */
@RestController
@Slf4j
@RequestMapping("hpvideo/user")
public class UserController {
    @DubboReference(reconnect = "2000")
    private UserService userService;

    @PostMapping("register")
    public ResponseMessage register(@RequestBody User user) {
        boolean register = userService.register(user);
        if (register){
            return ResponseMessage.success(ResponseConstant.SUCCESS_CODE);

        }
        return ResponseMessage.error(ResponseConstant.FAIL_CODE,"服务器开小差了，注册失败");
    }

}
