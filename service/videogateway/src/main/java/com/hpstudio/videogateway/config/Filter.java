package com.hpstudio.videogateway.config;

import com.auth0.jwt.interfaces.Claim;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hpstudio.videogateway.util.JWTUtil;
import constant.ResponseConstant;
import dubboService.UserService;
import entity.http.ResponseMessage;
import entity.system.User;
import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * @author mawen
 * @date 2020/12/2 17:48
 * @email 455766076@qq.com
 * @description
 */
@Configuration
public class Filter implements GlobalFilter, Ordered {
    @DubboReference
    private UserService userService;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        HttpHeaders headers = request.getHeaders();

        String path = request.getURI().getPath();
        if (-1 != path.indexOf("user/register")){
            return chain.filter(exchange);
        }

            //检查header有没有token
            String token = headers.getFirst("token");
        if (null == token) {
            return getVoidMono(exchange.getResponse(), ResponseConstant.FAIL_CODE, "token不能为空", HttpStatus.NOT_FOUND);
        }

        Map<String, Claim> claims = JWTUtil.parseToken(token);
        int id = claims.get("id").asInt();
        User user = userService.getById(id);

        boolean verify = JWTUtil.verify(token, user);
        if (!verify) {
            return getVoidMono(exchange.getResponse(), ResponseConstant.FAIL_CODE, "token验证失败，请重新登录", HttpStatus.NOT_FOUND);
        }

        return chain.filter(exchange);
    }

    public Mono<Void> getVoidMono(ServerHttpResponse response, int code, String msg, HttpStatus httpStatus) {
        response.getHeaders().add("Content-Type", "application-json;Charset=UTF-8");
        response.setStatusCode(httpStatus);
        ResponseMessage responseMessage = new ResponseMessage(code, msg);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonMsg = null;
        try {
            jsonMsg = objectMapper.writeValueAsString(responseMessage);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("json 转换失败");
        }
        DataBuffer wrap = response.bufferFactory().wrap(jsonMsg.getBytes());
        return response.writeWith(Flux.just(wrap));
    }

    @Override
    public int getOrder() {
        return -1;
    }
}
