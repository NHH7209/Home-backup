package com.example.modelexam.service.exam09;

import com.example.modelexam.dao.MemberDao;
import com.example.modelexam.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.modelexam.service.exam01
 * fileName : MemberService
 * author : GGG
 * date : 2023-10-06
 * description : 부서 업무 서비스 클래스, @Service, @Autowired,
 *               findAll()
 * 요약 :
 *     @Service : 업무 로직 담당 클래스위에 붙이는 어노테이션
 *      => 스프링 서버 가동될때 그 클래스 생성해둠(싱글톤)
 *      => 객체를 만들어서 함수를 쓸때 : new 생성자함수() 하는데
 *      => 스프링에서는 하지 않고 미리 만들어 둔 객체를 받아서 사용함
 *      (참고: IOC: 제어의 역전)
 *      기타 : @Repository , @Component 등
 *     @Autowired : 스프링에서 미리 만들어 둔 객체를 가져오기
 *       사용법 : 변수위에 또는 생성자함수 위에 붙이는 가져올 수 있음
 *      (참고: DI : 의존성 주입)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-06         GGG          최초 생성
 */
@Service
public class Member09Service {

    @Autowired
    MemberDao memberDao; // 가짜 DB에 접근하는 객체

    /**
     * 전체 조회 함수 : selectAll()(DAO 객체 함수) 호출
     * @return
     */
    public List<Member> findAll() {
//      TODO: memberDao.selectAll() : db 조회 함수 호출
        List<Member> list = memberDao.selectAll();

        return list;
    }

    /**
     * id(기본키)로 조회 : 상세조회(1건조회)
     * @param dno
     * @return
     */
    public Optional<Member> findById(long dno) {
//       todo: db 상세조회(1건조회) 함수 호출
//          id(기본키)로 조회
        Member member = memberDao.selectById(dno);
//      todo : null 방지 클래스 사용
        Optional<Member> optionalMember = Optional.ofNullable(member);

        return optionalMember;
    }

    /**
     * 부서 정보 저장 함수
     * @param member
     * @return
     */
    public List<Member> save(Member member) {

        List<Member> list = null;
//      todo: insert 시 dno 자동 생성
//        기존 부서번호 max 찾아서 + 10
        if(member.getEno() == null) {
//            todo: 전체조회해서 현재 배열의 크기 가져오기
            int count = memberDao.selectAll().size();
//            todo: 새로운 부서번호 생성
            int newEno = (count + 1) * 10;
//            todo: 새로운 부서번호 저장 : member
            member.setEno(newEno);
//            todo: db 저장
            list = memberDao.insert(member);
        } else {
//           todo: db 수정
            list = memberDao.update(member);
        }

        return list;
    }

    /**
     * 부서번호로 삭제하는 함수
     * @param dno
     * @return
     */
    public boolean removeById(int dno) {
//        삭제 함수 호출 : 리턴값 : (삭제된 건수)
        int iCount = memberDao.deleteById(dno);

        return (iCount > 0)? true : false;
    }
}