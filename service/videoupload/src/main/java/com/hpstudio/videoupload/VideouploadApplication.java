package com.hpstudio.videoupload;

import org.apache.dubbo.config.spring.context.annotation.DubboComponentScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@DubboComponentScan("com.hpstudio.videoupload.serviceImpl")
public class VideouploadApplication {

    public static void main(String[] args) {
        SpringApplication.run(VideouploadApplication.class, args);
    }

}
