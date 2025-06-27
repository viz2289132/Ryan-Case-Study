import React, { useState } from 'react';
import './Testimonial.css';
import userImage from '../../assets/user.png';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Floyd Miles',
    company: 'eBay',
    message:
      "Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    avatar: userImage
  },
  {
    name: 'Cameron Williamson',
    company: 'Dropbox',
    message:
      "The design workflow is intuitive and fast. I was able to build a full mockup in no time.",
    avatar: userImage
  },
  {
    name: 'Courtney Henry',
    company: 'Spotify',
    message:
      "The UI design and attention to detail are outstanding. This product saved me hours of work.",
    avatar: userImage
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const { name, company, message, avatar } = testimonials[current];

  return (
    <section className="testimonial-section">
      <h2>✴ What they say</h2>
      <div className="testimonial-box">
        {/* User info */}
        <div className="testimonial-user">
          <img src={avatar} alt={name} />
          <div>
            <strong>{name}</strong>
            <p className="company">{company}</p>
          </div>
        </div>

        {/* Message */}
        <p className="testimonial-message">
          <FaQuoteLeft /> {message}
        </p>

        {/* Controls */}
        <div className="testimonial-controls">
          <button onClick={prevTestimonial}><FaArrowLeft /></button>
          <button onClick={nextTestimonial}><FaArrowRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
