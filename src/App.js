import React from 'react';

import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="MainDiv">


      <Router>
        <Header></Header>
        <Cart></Cart>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/shop' element={<Shop></Shop>}/> */}
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;