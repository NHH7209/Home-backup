-- 06_Join.sql
-- 조인(*****)
-- 예제1) 사원번호가(ENO) 7788 인 사원의 부서명은(DNAME) 뭘까요?
-- 사원 : EMPLOYEE
-- 부서 : DEPARTMENT
-- 1) 사원테이블에서 ENO=7788 인 사람의 부서번호(DNO) 를 알아낸뒤 (1번)
SELECT DNO FROM EMPLOYEE
WHERE ENO = 7788; -- DNO = 20

-- 2) 부서테이블에서 그 부서번호에 해당하는 부서명을 출력하면됨     (2번)
SELECT * FROM DEPARTMENT
WHERE DNO = 20;
-- 결과 : 조회 성능이 저하됨( SQL 문 1번 실행하는 것이 가장 좋음 )
--       1) 코딩(SQL) : 해석(시간 소요)
--       2) 네트웍을 통해서 : 접속툴 <-> DB서버간 통신(시간 소요)

-- 2) 조인을 사용함 : 위의 2번조회를 1번 조회로 수정할 수 있음(성능 증가
-- 특징) 테이블 여러개를 공통컬럼을 이용해서 연결할 수 있음( 권장 : 5개 이내 ) 연결하면 할수록 느려진다.
-- 예제1) 사원번호가(ENO) 7788 인 사원의 부서명은(DNAME) 뭘까요?
-- 사용법) SELECT 별칭1.컬럼명, 별칭2.컬럼명
--        FROM 테이블1 별칭1
--            ,테이블2 별칭2
--        WHERE 별칭1.공통컬럼 = 별칭2.공통컬럼
SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO; -- 공통컬럼으로 연결함 (2개의 테이블)

-- 조인 의미
-- 사원 테이블
SELECT * FROM EMPLOYEE
ORDER BY DNO;

-- 부서 테이블
SELECT * FROM DEPARTMENT
ORDER BY DNO;

-- 예제 1) 사원번호(ENO) 가 7499 또는 7900 인 사원들에 소속된 부서정보를 모두 출력하세요
-- 부서정보 : 부서번호, 부서명, 부서위치
-- 힌트) 조인 및 조건 사용
-- 힌트) 조인조건) EMP.DNO = DEP.DNO
--       추가조건) EMP.ENO IN (7499, 7900)
SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO 
AND EMP.ENO IN (7499, 7900);

-- 연습 1) 조인하고 아래 조건을 추가하세요
--     1-1) 사원번호가(ENO) 7500 ~ 7700 사이에 있는 사원들의 소속된 부서정보를 출력하되
--      조건(범위) : BETWEEN A AND B
--     1-2) 부서이름이 SALES 인 부서만 출력하세요
-- 대상 : EMPLOYEE(사원), DEPARTMENT(부서)
SELECT EMP.*, DEP.*
FROM EMPLOYEE EMP
    ,DEPARTMENT DEP
WHERE EMP.DNO = DEP.DNO -- 공통컬럼 연결(이퀄(equal(=))조인
AND   EMP.ENO BETWEEN 7500 AND 7700
AND   DEP.DNAME = 'SALES';

-- 특수한 조인
-- 1) 범위 조인 : BETWEEM A AND B (A ~ B 사이의 값)
-- 단점 : 성능 대폭 하락
-- 가장 낮은 등급 : LOSAL 컬럼
-- 가장 높은 등급 : HISAL 컬럼
SELECT ENAME, SALARY, GRADE
FROM EMPLOYEE EMP
    ,SALGRADE SAL
WHERE EMP.SALARY BETWEEN SAL.LOSAL AND SAL.HISAL;

-- 2) 아우터 조인(OUTER JOIN)(**) : 
-- 이퀄조인(=) : 두 테이블에 공통컬럼에 NULL 값이 있으면 NULL 값을 제외하여 연결됨
-- MANAGER 컬럼 : 관리자 사원번호
-- 용도 : NULL 을 포함한 데이터도 화면에 표시하고 싶을 때 사용함
-- 사용법 : = 조인을 하되 NULL 값이 있는 쪾에 (+) 붙이면 됨
SELECT EMP.ENAME
      ,MAN.ENAME AS MANAGER
FROM EMPLOYEE EMP
    ,EMPLOYEE MAN
WHERE EMP.MANAGER = MAN.MANAGER(+);


