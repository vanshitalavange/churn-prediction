import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from "./components/Signup/Signup";
import { Map } from './components/map/Map';
import { SendData } from './components/sendData/SendData';
import { auth } from "./firebase-config";
import { FetchData } from './components/fetchData/FetchData';
import { SendExcelFile } from './components/sendData/SendExcelFile';

import './App.css';

const App = () => (

  <Router>
    <Routes>
      {/* <Route exact path="/blogs" element={<MainPage />}/> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map" element={<Map />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/send" element={<SendData />} />
      <Route path="/predict-churn" element={<SendExcelFile />} />
    </Routes>
  </Router>
);

export default App;
