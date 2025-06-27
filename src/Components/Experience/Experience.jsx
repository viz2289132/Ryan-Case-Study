import React from 'react';
import './Experience.css';

const experienceData = [
    { role: 'Lead Frontend Engineer', company: 'Spotify', years: '2019 - Present' },
    { role: 'Product Designer', company: 'Airbnb', years: '2017 - 2019' },
    { role: 'Software Developer', company: 'Netflix', years: '2015 - 2017' },
    { role: 'Intern UI Developer', company: 'Adobe', years: '2014 - 2015' }
  ];
  

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>✴ Experience</h2>
      <div className="table-container">
        <table className="experience-table">
          <tbody>
            {experienceData.map((exp, index) => (
              <tr key={index}>
                <td>{exp.role} at {exp.company}</td>
                <td>{exp.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Experience;
