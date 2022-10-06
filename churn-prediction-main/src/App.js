import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase-config";

import './App.css';

const App = () => (

  <Router>
    <Routes>
      {/* <Route exact path="/blogs" element={<MainPage />}/> */}
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
  </Router>
);

export default App;
