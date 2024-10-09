import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import logo from '../src/assets/logo.png';
import Skills from './Skills';
function App() {
  return (
    <>
    <Router>
    <NavBar logo={logo}></NavBar>
    <Routes>
      <Route path='/' element={<NavBar logo={logo}></NavBar>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;