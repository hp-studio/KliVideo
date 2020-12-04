package com.hpstudio.user.config;

import com.baomidou.mybatisplus.autoconfigure.MybatisPlusProperties;
import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.core.config.GlobalConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

/**
 * @author mawen
 * @date 2020/12/3 10:08
 * @email 455766076@qq.com
 * @description
 */
@Configuration
public class MybatisConfig {

    @Bean
    public MybatisPlusProperties properties() {
        MybatisPlusProperties mybatisPlusProperties = new MybatisPlusProperties();
        mybatisPlusProperties.setConfiguration(mybatisConfiguration());
        mybatisPlusProperties.setGlobalConfig(globalConfig());
        String[] locations = {"classpath:/mapper/*.xml"};
        mybatisPlusProperties.setMapperLocations(locations);
        return mybatisPlusProperties;
    }

    public MybatisConfiguration mybatisConfiguration() {
        MybatisConfiguration mybatisConfiguration = new MybatisConfiguration();
        mybatisConfiguration.setMapUnderscoreToCamelCase(false);
        return mybatisConfiguration;
    }

    public GlobalConfig globalConfig() {
        GlobalConfig globalConfig = new GlobalConfig();
        globalConfig.setBanner(false);
        return globalConfig;
    }

    @Bean
    public DataSource dataSource() {
        HikariDataSource hikariDataSource = new HikariDataSource();
        hikariDataSource.setJdbcUrl("jdbc:mysql://localhost:3306/videoWebSite");
        hikariDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        hikariDataSource.setUsername("xxx");
        hikariDataSource.setPassword("xxxx");
        return hikariDataSource;
    }
}
