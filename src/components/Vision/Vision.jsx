import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision" id="vision">
      <div className="vision-container">
        <h2>My Vision</h2>
        <div className="vision-content">
          <div className="vision-card">
            <h3>Mission</h3>
            <p>I aspire to use technology to create solutions that improve lives, whether by enhancing accessibility, empowering communities, or solving pressing societal challenges. Through projects like an CommUnity I want to use tech for community welfare. I am committed to building impactful, user-centric innovations.I am always eager to learn, collaborate, and contribute to meaningful tech-driven change.</p>
          </div>
          <div className="vision-card">
            <h3>Goals</h3>
            <p>I aim to bridge gaps in accessibility, mobility, and communication. Projects like SafePath, an AI-powered indoor navigation assistant for the visually impaired, reflect my commitment to this mission.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;