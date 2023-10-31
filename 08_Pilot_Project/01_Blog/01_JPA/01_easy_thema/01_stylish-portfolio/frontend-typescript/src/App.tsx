import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import Home from './pages/Home';


function App() {
  return (
    <div> 
      <Routes>
        {/* home 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
