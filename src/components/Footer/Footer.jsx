import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#vision">Vision</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
          </div>
          <div className="footer__social">
            <a href="https://github.com/Saanvim11"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/
            saanvi-moolchandani-59b99328a"><i className="fab fa-linkedin"></i></a>
              <a href="https://leetcode.com/u/saanvimoolchandani/"><i className="fab fa-leetcode"></i></a>
              <a href="https://www.codechef.com/users/saanvi_11"><i className="fab fa-codechef"></i></a></div>
          <div className="footer__copyright">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;