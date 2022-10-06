import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import banner from '../../assets/churn-img-home.png'
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Churn Prediction for Telecommunication</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam iure quaerat architecto obcaecati blanditiis repellendus ipsa odio in deleniti modi. Earum quae molestiae eveniet accusamus vero consequatur recusandae veniam perferendis!
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
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
);

export default Header;
