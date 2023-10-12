package com.example.mybatisexam.model.vo;

import com.example.mybatisexam.model.common.BaseTimeEntity;

/**
 * packageName : com.example.mybatisexam.model.vo
 * fileName : Emp
 * author : GGG
 * date : 2023-10-12
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-12         GGG          최초 생성
 */
public class Emp extends BaseTimeEntity {
    private Integer eno; // 부서번호
    private String ename; // 부서명
    private String loc;   // 부서위치
}
