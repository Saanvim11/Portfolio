import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-year">2023-2027</div>
            <div className="education-details">
              <h3>Vellore Institute Of Technology, Chennai</h3>
              <p>Degree in Computer Science</p>
              <p>CGPA - 8.81</p>
              <p>Clubs :
                <p>Linux Users Group : Management</p>
                <p>Wakhra Punjab : Social Media</p>
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-year">2011-2023</div>
            <div className="education-details">
              <h3>Delhi Public School, Raipur</h3>
              <p>Schooling (1st to 12th)</p>
              <p>Class XII - 87.2%</p>
              <p>Class X - 97.8%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;