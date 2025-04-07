import React from 'react';
import './About.css';
import profileImage from './img.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2><b>About Me</b></h2>
          <br />
          <p>I am Saanvi Moolchandani, a B.Tech student passionate about software development and AI. I have a strong foundation in frontend development, backend technologies, and data structures & algorithms (DSA). With experience in JavaScript, React, Node.js, Express, MongoDB, and SQL, I build scalable and interactive web applications. I am also exploring AI and machine learning, aiming to integrate intelligent solutions into real-world problems. Currently, I am contributing to projects like an AI-powered alumni networking platform and a vernacular chatbot for farmers. I am always eager to learn, contribute, and collaborate on innovative tech projects.</p>
          <br />
          <p>My journey in tech began in 11th grade when I started exploring programming and web development. </p>
          
          <div className="contact-info">
            <h2>Hobbies</h2>
            <br />
            <ul>
                <li>Sports</li>
                <ul>
                    <li>Badminton</li>
                    <li>Volleyball</li>
                    <li>Swimming</li>
                    <li>Basketball</li>
                    </ul>
                    <br />
                <li>Music</li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;