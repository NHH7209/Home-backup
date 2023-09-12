import React, { useState } from 'react'

function AddCustomer() {
   // TODO: 변수 정의
  // 임시 객체 정의
  const initailCustomer = {
    cid: "",
    cname: "",
    email: "",
    phone: ""
  }

  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [customer, setCustomer] = useState(initailCustomer);

  // TODO: 함수 정의
  // onChange : 역바인딩 함수(직접 코딩) : handleChange()
  // nfn : 화살표 단축키
  const handleChange = (event) => { 
    // 현재 화면 입력값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름 : 
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setCustomer({ ...customer, [attrName]:attrValue})
   }


  // nfn : 화살표 단축키
  const saveCustomer = () => { 
    alert("저장되었습니다.")
   }

  return (
    // TODO: 여기
    <div className="submit-form">
      {/* ename 시작 */}
      <div className="form-group">
        <label htmlFor="cid">cid</label>
        <input
          type="text"
          className="form-control"
          id="cid"
          required
          value={customer.cid}
          onChange={handleChange}
          name="cid"
        />
      </div>
      {/* ename 끝 */}

      {/* job 시작 */}
      <div className="form-group">
        <label htmlFor="cname">cname</label>
        <input
          type="text"
          className="form-control"
          id="cname"
          required
          value={customer.cname}
          onChange={handleChange}
          name="cname"
        />
      </div>
      {/* job 끝 */}

      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="number"
          className="form-control"
          id="email"
          required
          value={customer.email}
          onChange={handleChange}
          name="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">phone</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          required
          value={customer.phone}
          onChange={handleChange}
          name="phone"
        />
      </div>

      <button onClick={saveCustomer} className="btn btn-success mt-3">
        Submit
      </button>
    </div>
  );
}

export default AddCustomer