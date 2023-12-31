// components/common/Nav.tsx : rfce
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      {/* 여기 */}
      {/* <!-- 머리말 시작 --> */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      {/* <!-- 머리말 끝 --> */}

      {/* <!-- 메뉴 시작 --> */}
      <nav className="site-nav">
        <div className="container bg-primary">
          <table>
          <th>
          <div className="site-navigation">
          <td>
            <Link to="/" className="logo m-0">
              항공권 예매 <span className="text-primary"></span>
            </Link>
            {/* 메뉴들 시작 */}
          </td>
          <td style={{width:"750px", textAlign:"center"}}>
            <ul className="js-clone-nav d-none d-lg-inline-block site-menu">

              {/* home 메뉴 시작 */}
              <li className="has-children">
                <a href="#" style={{fontSize:"25px", margin:"0 18px"}}>항공권</a>
                <ul className="dropdown">
                  <li>
                    <a href="#" >예약</a>
                  </li>
                  <li>
                    <a href="#">예약 조회</a>
                  </li>
                </ul>
              </li>
              {/* home 메뉴 끝 */}

              {/* home 메뉴 시작 */}
              <li className="">
                <Link to="/" style={{fontSize:"25px", margin:"0 18px"}}>체크인</Link>
              </li>
              {/* home 메뉴 끝 */}

              {/* home 메뉴 시작 */}
              <li className="">
                <Link to="/" style={{fontSize:"25px", margin:"0 18px"}}>마일리지</Link>
              </li>
              {/* home 메뉴 끝 */}

              {/* 드롭다운 메뉴 시작 */}
              <li className="has-children">
                <a href="#" style={{fontSize:"25px", margin:"0 18px"}}>고객센터</a>
                <ul className="dropdown">
                  <li>
                    <a href="#" >공지사항</a>
                  </li>
                  <li>
                    <a href="#">자주 묻는 질문</a>
                  </li>
                  <li>
                    <a href="#">1:1 문의</a>
                  </li>
                </ul>
              </li>
              {/* 드롭다운 메뉴 끝 */}
            </ul>
            

            </td>
            {/* 메뉴들 끝 */}
            <td style={{width:"250px", textAlign:"end"}}>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">

              {/* home 메뉴 시작 */}
                  <li>
                    <Link to="/login" >로그인</Link>
                  </li>
                  <li>
                    <Link to="/register">회원가입</Link>
                  </li>
              {/* home 메뉴 끝 */}
              </ul>

            </td>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
              >
              <span></span>
            </a>
          </div>
              </th>
          </table>
        </div>
      </nav>
      {/* <!-- 메뉴 끝 --> */}
    </>
  );
}

export default Nav;
