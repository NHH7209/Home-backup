import React, { useState } from 'react'

function Customer() {
  const initialCustomer = [
    {
      cid: 1,
      cname: "홍길동",
      email: "hong@naver.com",
      phone: "010-1234-5678"
    },
    {
      no: 2,
      cname: "장길산",
      email: "jang@naver.com",
      phone: "010-1234-5678"
    },
    {
      no: 3,
      cname: "임꺽정",
      email: "lim@naver.com",
      phone: "010-1234-5678"
    },
  ];
  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값)
  let [customer, setCustomer] = useState(initialCustomer);
  return (
    <div className="container mt-5">
      {/* emp.map((value, index)=>(<li>{value.ename}</li>)) */}
      <h4>Customer List</h4>

      <ul class="list-group mt-3">
        {/* dept.map(()=>(<li>문자열</li>)) */}
        {customer.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.cid}
            {value.no}
            <br/>
            {value.cname}
            <br/>
            {value.email}
            <br/>
            {value.phone}
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Customer