package com.hpstudio.video.config;

import com.baomidou.mybatisplus.autoconfigure.MybatisPlusProperties;
import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.core.config.GlobalConfig;
import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;
import java.io.IOException;

/**
 * @author mawen
 * @date 2020/11/26 9:36
 * @email 455766076@qq.com
 * @description
 */
@Configuration
public class MyBatisConfig {
    @Bean
    public MybatisPlusProperties properties() {
        MybatisPlusProperties properties = new MybatisPlusProperties();
        String[] locations = {"classpath:/mapper/*.xml"};
        properties.setMapperLocations(locations);
        properties.setGlobalConfig(globalConfig());
        properties.setConfiguration(mybatisConfiguration());
        return properties;
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
