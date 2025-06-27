import React from 'react';
import './Works.css';

import analysisImg from '../../assets/analysis.png';
import fortknoxImg from '../../assets/fortknox.png';
import zenocideImg from '../../assets/zenocide.png';

const worksData = [
  {
    title: 'Music Streaming Dashboard',
    desc: 'A sleek, responsive dashboard for managing playlists, users, and analytics for a music platform.',
    image: analysisImg
  },
  {
    title: 'E-commerce Admin Panel',
    desc: 'A modern admin interface for managing products, orders, and customers for an online store.',
    image: fortknoxImg
  },
  {
    title: 'Social Media Analytics App',
    desc: 'An interactive app providing insights and visualizations for social media engagement.',
    image: zenocideImg
  }
];


const Works = () => {
  return (
    <section className="works-section">
      <div className="works-header">
        <h2>✴ Works</h2>
        <span className="view-all">view all</span>
      </div>
      <div className="works-list">
        {worksData.map((work, index) => (
          <div key={index} className="works-card">
            <div className="works-image">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="works-content">
              <h5>{work.title}</h5>
              <p>{work.desc}</p>
              <button className="btn-outline-light">Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
