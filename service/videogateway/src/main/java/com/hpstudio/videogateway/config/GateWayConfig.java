package com.hpstudio.videogateway.config;

import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.cloud.gateway.filter.ratelimit.RateLimiter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * @author mawen
 * @date 2020/11/27 9:17
 * @email 455766076@qq.com
 * @description
 */
@Configuration
public class GateWayConfig {

    /**
     * Predicate 过滤规则 对应 .route() 里面的p
     * path 要匹配的路由
     * filters 往下游转发时，可以添加参数
     * 官网文档 https://docs.spring.io/spring-cloud-gateway/docs/2.2.5.RELEASE/reference/html
     * 有多种过滤方式，这里使用了path，过滤路径的方式
     * 一个router只能使用一种过滤方式
     */
    @Bean
    public RouteLocator videoGateWay(RouteLocatorBuilder builder) {
        return builder.routes()
                //匹配 /hpvideo 开头的请求
                .route("hpvideoMainGateWay", p -> p.path("/hpvideo/**")
                        //转发到下游的地址 转发到consumer的服务上
                        .uri("lb://consumer")).build();
    }
}
