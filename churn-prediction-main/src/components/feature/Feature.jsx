import React from 'react';
import './feature.css';
import { Link } from 'react-router-dom';

const Feature = ({ title, text, path }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <Link to={path} onClick={() => console.log(text)}><div className="gpt3__features-container_feature-text">
      {text}
    </div></Link>
  </div>
);

export default Feature;
