package com.hpstudio.videogateway.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import entity.system.User;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * @author mawen
 * @date 2020/12/2 18:38
 * @email 455766076@qq.com
 * @description
 */
public class JWTUtil {

    public static String createToken(long expiredTime, User user) {
        long currentTimeMillis = System.currentTimeMillis();
        //当前时间
        Date date = new Date(currentTimeMillis);
        //过期时间
        Date expiredDate = new Date(currentTimeMillis + expiredTime);
        String token = JWT.create()
                .withClaim("id", user.getId())
                .withClaim("pwd", user.getPassword())
                //签发时间
                .withIssuedAt(date)
                //过期时间
                .withExpiresAt(expiredDate)
                //jwtid
                .withJWTId(UUID.randomUUID().toString().replaceAll("-", ""))
                //密码
                .withSubject(user.getId().toString())
                .sign(Algorithm.HMAC256(user.getPassword()));
        return token;
    }

    public static boolean verify(String token, User user) {
        DecodedJWT decode = JWT.decode(token);
        Map<String, Claim> claims = decode.getClaims();
        String pwd = claims.get("pwd").asString();
        if (!pwd.equals(pwd)) {
            return false;
        }
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(pwd)).build();
            DecodedJWT verify = verifier.verify(token);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
        return true;
    }

    public static Map<String, Claim> parseToken(String token) {
        DecodedJWT decode = JWT.decode(token);
        return decode.getClaims();
    }
}
