import React from 'react';
import './Resume.css';
import resumePDF from './resume.pdf'; 
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2>My Resume</h2>
        <p>Download or view my professional resume</p>
        
        <div className="resume-options">
          <a 
            href={resumePDF} 
            download="YourName_Resume.pdf"
            className="resume-btn resume-btn-primary"
          >
            <FaDownload /> Download PDF
          </a>
          
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-btn resume-btn-secondary"
          >
            <FaEye /> View Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;