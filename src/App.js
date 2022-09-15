// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './App1.css';
import About from './component/About';
import NavBar from './component/NavBar';

import TextForm from './component/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  
  return (
    
    <>
    {/* <NavBar title="TextUtil" mode={Mode}/> */}
   
    <NavBar title = "TextUtils" />
    <div className="container my-3">
    
          <TextForm heading = "Enter the  text to analyze below "/>

           
    <About/>
    </div>
    </>
  );
}

export default App;
