package com.hpstudio.videobarrage;

import org.apache.dubbo.config.spring.context.annotation.DubboComponentScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@DubboComponentScan("com.hpstudio.videobarrage.serviceImpl")
public class VideobarrageApplication {

    public static void main(String[] args) {
        SpringApplication.run(VideobarrageApplication.class, args);
    }

}
