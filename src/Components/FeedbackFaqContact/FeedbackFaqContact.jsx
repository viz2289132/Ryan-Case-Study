import React, { useState } from "react";
import "./FeedbackFaqContact.css";
import Testimonial from "../Testimonial/Testimonial";
// import MarqueeLogos from "./MarqueeLogos";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process involves research, design, prototype, and test phases. I gather user insights, create wireframes, build interactive models, and refine based on feedback."
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use Figma, Adobe XD, Sketch, and InVision depending on project needs."
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success via usability tests, user feedback, and KPIs like task completion and conversion rate."
  }
];

const FeedbackFaqContact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="feedback-faq-contact">
     
       <Testimonial/>
      <section className="faq-section">
        <h2>✴ Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-button ${activeIndex === index ? "expanded" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="accordion-body">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default FeedbackFaqContact;
