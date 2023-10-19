// empService.ts
import http from "../utils/http-common"; // axios 통신
import Iemp from "../types/IEmp";      // Iemp 임포트

// 화살표함수 단축키 : nfn
/** 전체 조회 요청 */
const getAll = () => { 
    // 조회요청 : .get("/url")
    // 사용법 : http.get<리턴타입>("url")
    return http.get<Array<Iemp>>("/emp");
 }

 /** 상세조회(1건조회) 요청 : 기본키 */
 const get = (eno:any) => { 
    return http.get<Iemp>(`/emp/${eno}`);
  }

/** 저장요청 */
const create = (data:Iemp) => { 
    return http.post<Iemp>("/emp", data);
 }

/** 수정요청 : 기본키, 객체 */
const update = (eno:any, data:Iemp) => { 
    return http.put<any>(`/emp/${eno}`, data);
 }

/** 삭제요청 : 기본키 */
const remove = (eno:any) => { 
    return http.delete<any>(`/emp/deletion/${eno}`);
 }

/** 부서명 검색 함수 */
const findByEname = (ename:string) => { 
    return http.get<Array<Iemp>>(`/emp?ename=${ename}`);
 }

const empService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByEname
}

export default empService;