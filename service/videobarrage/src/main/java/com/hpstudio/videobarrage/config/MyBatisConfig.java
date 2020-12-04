package com.hpstudio.videobarrage.config;

import com.baomidou.mybatisplus.core.MybatisConfiguration;
import com.baomidou.mybatisplus.core.config.GlobalConfig;
import com.baomidou.mybatisplus.core.toolkit.GlobalConfigUtils;
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
    public MybatisSqlSessionFactoryBean mybatisSqlSessionFactoryBuilder() {
        MybatisSqlSessionFactoryBean sessionFactoryBean = new MybatisSqlSessionFactoryBean();
        sessionFactoryBean.setConfiguration(mybatisConfiguration());
        try {
            sessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:/mapper/*.xml"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        sessionFactoryBean.setDataSource(dataSource());
        return sessionFactoryBean;
    }

    public MybatisConfiguration mybatisConfiguration() {
        MybatisConfiguration mybatisConfiguration = new MybatisConfiguration();
        mybatisConfiguration.setMapUnderscoreToCamelCase(false);
        GlobalConfigUtils.setGlobalConfig(mybatisConfiguration, globalConfig());
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
        hikariDataSource.setJdbcUrl("jdbc:mysql://111.229.155.159:3306/videoWebSite");
        hikariDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        hikariDataSource.setUsername("wjj");
        hikariDataSource.setPassword("wjj1234");
        return hikariDataSource;
    }
}
