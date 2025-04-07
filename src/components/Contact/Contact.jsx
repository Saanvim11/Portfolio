import React from 'react';
import './Contact.css';
import mailIcon from './mail.png';
import phoneIcon from './phone.png';
import locationIcon from './location.png';
import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';
import leetcodeIcon from './leetcode.png';
import codechefIcon from './codechef.jpg';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="contact-item">
            <img src={mailIcon} alt="Email" className="contact-icon" />
            <span>saanvimoolchandani01@gmail.com</span>
          </div>
          
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <span>+91 7987298776</span>
          </div>
          
          <div className="contact-item">
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <span>Raipur, India</span>
          </div>
          
          <div className="contact-social">
            <a href="https://www.linkedin.com/in/
            saanvi-moolchandani-59b99328a" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/Saanvim11" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://leetcode.com/u/saanvimoolchandani/" target="_blank" rel="noopener noreferrer">
              <img src={leetcodeIcon} alt="LeetCode" className="social-icon" />
            </a>
            <a href="https://codechef.com/users/saanvi_11" target="_blank" rel="noopener noreferrer">
              <img src={codechefIcon} alt="CodeChef" className="social-icon" />
            </a>
          </div>
        </div>
        
        <form className="contact-form">
            <h3>Talk to Me</h3>
        <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
        </form>
        </div>
    </section>
  );
};

export default Contact;

