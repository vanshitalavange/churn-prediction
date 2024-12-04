import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Redirect } from "react-router"
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from "./components/Signup/Signup";
import { Map } from './components/map/Map';
import { AboutUs } from "./components/AboutUs/AboutUs"
import { ContactUs } from "./components/ContactUs/ContactUs"
import { SendData } from './components/sendData/SendData';
import { auth } from "./firebase-config";
import { FetchData } from './components/fetchData/FetchData';
import { SendExcelFile } from './components/sendData/SendExcelFile';
import { Tieups } from "./components/Tieups/Tieups"
import { AttributeSpecificData } from "./components/AttributeSpecificData/AttributeSpecificData"
import { AuthProvider } from './auth-context';

import './App.css';

const App = () => (

  <AuthProvider><Router>
    <Routes>
      {/* <Route exact path="/blogs" element={<MainPage />}/> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map" element={<Map />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/send" element={<SendData />} />
      <Route path="/predict-churn" element={<SendExcelFile />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/customerdata" element={<AttributeSpecificData />} />
      <Route path="/tieups" element={<Tieups />} />
    </Routes>
  </Router>
  </AuthProvider>

);

export default App;
