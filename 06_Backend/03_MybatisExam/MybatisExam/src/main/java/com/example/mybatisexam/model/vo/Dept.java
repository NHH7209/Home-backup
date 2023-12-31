package com.example.mybatisexam.model.vo;

import com.example.mybatisexam.model.common.BaseTimeEntity;
import lombok.*;

/**
 * packageName : com.example.mybatisexam.model.vo
 * fileName : Dept
 * author : GGG
 * date : 2023-10-12
 * description : 부서 클래스 == 부서 테이블 유사
 * 요약 :
 *      vo(value Object) : 테이블과 동일하게 만듬
 *      dto(Data Transfer Object) : 테이블 + 가공컬럼(속성)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Dept extends BaseTimeEntity {
    private Integer dno; // 부서번호
    private String dname; // 부서명
    private String loc;   // 부서위치
}