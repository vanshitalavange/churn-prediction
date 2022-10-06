import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    const logout = async () => {
      await signOut(auth);
    };
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} onClick={() => navigate("/")}/> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p onClick={() => navigate("/")}><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Churn Prediction</a></p>
          <p><a href="#possibility">Visualization</a></p>
          <p><a href="#features">Recommendation</a></p>
          <p><a href="#blog">Contact US</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={() => {!user && navigate("/login")}}>{user ? user.email : "Sign in"}</p>
        <button type="button" onClick={() => {user ? logout() : navigate("/signup")}}>{user ? "logout" : "Sign up"}</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Our Subscriptions</a></p>
            <p><a href="#possibility">Visualization</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Contact US</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p onClick={() => navigate("/login")}>Sign in</p>
            <button type="button" onClick={() => navigate("/signup")}>Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
