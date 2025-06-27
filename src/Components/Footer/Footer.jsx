import React from "react";
import "./Footer.css";

import figma from "../../assets/figma.png";
import designer from "../../assets/designer.png";

const images = [figma, designer, figma, designer];

const Footer = () => {
  return (
    <footer>
          {/* Marquee Logos */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`logo-${index}`} className="marquee-logo" />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <h1>LET’S TALK!</h1>
      <p>
        <a href="mailto:vishal2289132@gmail.com">
          vishal2289132@gmail.com ↗
        </a>
      </p>

    
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-left">© Vishal – 2025</div>
        <div className="footer-right">
          <samp>Dribbble</samp>
          <samp>Behance</samp>
          <samp>Twitter</samp>
          <samp>Instagram</samp>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
