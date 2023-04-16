import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import banner from '../../assets/churn-img-home.png'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../../firebase-config"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './header.css';

const Header = () => {
  const [user, setUser] = useState(null)
  const [newEmail,setNewEmail] = useState(null)
  const navigate = useNavigate()
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleRegistration = () => {
    if(newEmail){
      if(user){
        alert("You have already subscribed!")
      }else{
        navigate('/signup',{state:{email:newEmail}})
      }
    }
  }
  return <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Churn Prediction for Telecommunication</h1>
      <p>The objective is to measure the impact of churn factors on customer loyalty and to discover ways to manage customer churn. It uses predictive analytics techniques to develop churn prediction models that predict customer churn by assessing the tendency of probability to churn
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" onChange={(e) => setNewEmail(e.target.value)}/>
        <button type="button" onClick={() => handleRegistration()}>Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      {/* <img src={ai} /> */}
      <img src={banner} />
    </div>
  </div>
}

export default Header;
