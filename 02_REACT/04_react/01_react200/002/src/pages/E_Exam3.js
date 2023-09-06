// E_Exam3.js : 자식
// rfce
// TODO: 부모에서 데이터 전송 시 아래 결과와 같이 출력하세요(화면에 출력)
/* <E_Exam3 name="처음 만난 파이썬" 
                numOfPage={300} /> */
// 출력 : 이 책의 이름은 처음 만난 파이썬 입니다.
//        이 책의 총 300 페이지입니다.
import React from "react";

function E_Exam3(props) {
  
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h2>{`이 책의 총 ${props.numOfPage} 입니다.`}</h2>
    </div>
  );
}

export default E_Exam3;
