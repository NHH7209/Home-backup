import "./App.css";
import Customer from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import Home from "./pages/Home";
// 메뉴 라이브러리 추가
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      {/*  */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* Home 시작 */}
              {/* <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li> */}
              {/* Home 끝 */}
              

              {/* Emp 시작(/emp) */}
              <li class="nav-item">
                <Link to="/emp" class="nav-link">
                  Emp
                </Link>
              </li>
              {/* Emp 끝 */}
              {/* AddEmp 시작(/add-emp) */}
              <li class="nav-item">
                <Link to="/add-emp" class="nav-link">
                  Add Emp
                </Link>
              </li>
              {/* AddEmp 끝 */}
            </ul>
          </div>
        </div>
      </nav>

      {/* 본문 */}
      <div>
        {/* 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
        <Routes>
          {/* / : 첫화면 url -> <Home /> 화면에 띄워라 */}
          {/* /dept : dept url -> <Dept /> 화면에 띄워라 */}
          {/* 줄복사 : ctrl + d */}
          {/* <Route path="/dept" element={<Dept />} /> */}
          {/* <Route path="/add-dept" element={<AddDept />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/emp" element={<Customer />} />
          <Route path="/add-emp" element={<AddCustomer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;