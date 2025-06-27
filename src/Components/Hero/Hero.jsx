import React from 'react';
import './Hero.css';

import rectangle from '../../assets/rectangle.png';
import rectangle2 from '../../assets/rectangle2.png';
import dorodesignLogo from '../../assets/dorodesign.png';
import waveLogo from '../../assets/wave.png';
import siloulaLogo from '../../assets/siloula.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1 className="hero-heading">
        I AM A <img src={rectangle} alt="design" /> FREELANCE <br />
        DESIGNER <img src={rectangle2} alt="computer" /> FROM <br />
        SAN FRANCISCO
      </h1>
      
      <div className="hero-content">
        <div className="hero-left">
          <div className="logo-marquee">
            <div className="marquee-track">
              {[siloulaLogo, dorodesignLogo, waveLogo, siloulaLogo].map((logo, index) => (
                <img key={index} src={logo} alt={`logo-${index}`} className="logo-img" />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            Welcome to my portfolio. Here, artistry meets functionality.
            Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
