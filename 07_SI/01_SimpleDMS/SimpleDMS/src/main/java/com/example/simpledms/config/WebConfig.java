package com.example.simpledms.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * packageName : com.example.dongsungsi.controller
 * fileName : WebConfig
 * author : kangtaegyung
 * date : 2022/06/14
 * description :
 *  @Configuration : 자바클래스 에 설정 기능을 부여하는 어노테이션 (application.properties 비슷)
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022/06/14         kangtaegyung          최초 생성
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
//                아래 url 허용
//          사용법 : .allowedOrigins("http://허용할IP:허용할Port", ...)
                .allowedOrigins("http://localhost:3000")

//                강사님 테스트로 작성한거 신경 안써도 됨 위에꺼 사용
//               TODO: AWS 배포주소
//                .allowedOrigins("http://35.174.200.96:3000/")
//                TODO: OCI 배포주소
//                .allowedOrigins("http://146.56.111.26:3000/")

//                Todo: 아래 추가해야 update, delete, insert, select 가 cors 문제가 안생김
                .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.PATCH.name()
                );
    }
}