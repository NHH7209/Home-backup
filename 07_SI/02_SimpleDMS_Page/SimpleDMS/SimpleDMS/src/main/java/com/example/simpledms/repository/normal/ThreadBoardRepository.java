package com.example.simpledms.repository.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.normal
 * fileName : ReplyBoardRepository
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@Repository
public interface ThreadBoardRepository extends JpaRepository<ReplyBoard, Integer> {
    //    계층형 조회(특수) 쿼리 : @Query(, nativeQuery=true)
    @Query(value = "SELECT TID           AS tid " +
            "     , LPAD('⤵', (LEVEL-1))|| subject   AS subject " +
            "     , mainText AS mainText " +
            "     , writer  AS writer " +
            "     , views      AS views " +
            "     , tGroup   AS tgroup " +
            "     , tParent  AS tparent " +
            "FROM TB_THREAD_BOARD " +
            "WHERE SUBJECT LIKE '%'|| :subject ||'%' " +
            "AND   DELETE_YN = 'N' " +
            "START WITH TPARENT = 0    " +
            "CONNECT BY PRIOR TID = TPARENT  " +
            "ORDER SIBLINGS BY TGROUP DESC", nativeQuery = true)
    Page<ThreadBoardDto> selectByConnectByPage(
            @Param("subject") String subject,
            Pageable pageable);

}