import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Churn Prediction',
    text: 'With our churn prediction platform, businesses can gain a deeper understanding of their customers behavior, preferences, and needs, and tailor their strategies accordingly.',
    path: '/'
  },
  {
    title: 'Visualization',
    text: 'Geospatial Distribution shows the geographical distribution of the telecom service users in various geographical areas which will support the decision-makers.',
    path: '/map'
  },
  {
    title: 'Analytics',
    text: 'Quick Analytics briefs about a particular spectrum within a glance. Out of the box, line charts, and bar plot visualizations to get the essence of the business process at a glance.',
    path: '/'
  },
  {
    title: 'Tie-up offers',
    text: 'The tie-up offers page will specify tie-ups for customers.',
    path: '/'
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} path={item.path}/>
      ))}
    </div>
  </div>
);

export default Features;

