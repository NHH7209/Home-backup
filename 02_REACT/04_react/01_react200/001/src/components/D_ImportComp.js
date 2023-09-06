// D_ImportComp.js : 자식 컴포넌트
// TODO: 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// TODO: 1) css 파일 준비해서 import 하면 적용됨
// TODO: 프로젝트가 커질수록 디자인 클래스 선택자들이 중첩될 수 있다.
// TODO: 예) A라는 사람이 css : .alpha라고 이름을 지었다고 과정을 하자
// TODO:     B라는 사람은 css : .alpha라고 이름을 지으면 중복이 되어 오류가 나올 수 있다
// TODO: 2) 공통 디자인 적용 : 태그선택자 등을 자유롭게 코딩
// TODO: 3) 클래스/id 선택자로 디자인 함 : 프로젝트명(dms01-클래스명 ~ dms05-클래스명) 

// rfce
import React from 'react'
// css 파일 import 
// 사용법 : import "css파일경로";
import "../assets/D_ImportComp.css";

function D_ImportComp() {

    // TODO: 화면에 보이는 부분 
  return (
    <div>
        {/* class="" => className="" : 리액트에는 class 대신 사용함 */}
        <h2 className="dms01-h2">ImportComp</h2>
    </div>
  )
}

export default D_ImportComp