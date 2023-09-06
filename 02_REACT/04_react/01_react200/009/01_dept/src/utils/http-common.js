// 1) 통신 라이브러리 추가 : import 
import axios from "axios";

// 2) 기본 주소 설정 : 가짜 벡엔드 (http://localhost:8000)
export default axios.create({
    baseURL: "http://localhost:8000", // 기본 주소
    headers: {
      "Content-Type": "application/json" // 통신에 사용할 문서종류(json)
    }
})
