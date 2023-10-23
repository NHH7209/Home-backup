package com.example.simpledms.controller.basic;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.service.basic.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.basic
 * fileName : DeptController
 * author : GGG
 * date : 2023-10-23
 * description : 부서 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-23         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/basic")
public class DeptController {

    @Autowired
    DeptService deptService; // DI

    //    전체 조회 + dname like 검색
    @GetMapping("/dept")
    public ResponseEntity<Object> find(
            @RequestParam(defaultValue = "") String dname,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

//          전체조회(dname="") + like 검색(dname="S")
            Page<Dept> deptPage
                    = deptService.findAllByDnameContaining(dname, pageable);

//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String , Object> response = new HashMap<>();
            response.put("dept", deptPage.getContent()); // 부서배열
            response.put("currentPage", deptPage.getNumber()); // 현재페이지번호
            response.put("totalItems", deptPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", deptPage.getTotalPages()); // 총페이지수

            if (deptPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//      저장 함수
    @PostMapping("/dept")
    public ResponseEntity<Object> create(@RequestBody Dept dept) {

        try {
            Dept dept2 = deptService.save(dept);

            return new ResponseEntity<>(dept2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/dept/{dno}")
    public ResponseEntity<Object> update(
            @PathVariable int dno,
            @RequestBody Dept dept) {

        try {
            Dept dept2 = deptService.save(dept); // db 수정

            return new ResponseEntity<>(dept2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//  상세조회
    @GetMapping("/dept/{dno}")
    public ResponseEntity<Object> findById(@PathVariable int dno) {

        try {
//            상세조회 실행
            Optional<Dept> optionalDept = deptService.findById(dno);

            if (optionalDept.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalDept.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/dept/deletion/{dno}")
    public ResponseEntity<Object> delete(@PathVariable int dno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = deptService.removeById(dno);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}