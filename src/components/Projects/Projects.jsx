import React from 'react';
import './Projects.css';
import projectimage from './project1.jpg';

const Projects = () => {
  const project = {
    title: 'CommUnity',
    description: 'The proposed platform aims to enhance civic engagement by providing a user-friendly app or website where residents can report local issues such as potholes, waste accumulation, and power outages. Utilizing geo-tagging, real-time tracking, and community collaboration, the platform ensures efficient problem resolution while promoting transparency in local governance. Gamification and partnerships with local businesses incentivize participation, fostering a culture of proactive involvement. By integrating local authorities and data-driven resource allocation, the platform strengthens governance and public trust. Additionally, it supports long-term sustainability projects and awareness campaigns, encouraging community-driven initiatives. Ultimately, this solution transforms civic responsibility into an interactive, community-led effort that improves infrastructure, enhances accountability, and fosters a sense of shared ownership in local development.',
    technologies: ['React', 'Node.js', 'MongoDB','Express.js','Typescript','Javascript'],
    link: '#https://github.com/Shrutz72/Hackathon',
    github: '#https://github.com/Shrutz72/Hackathon'
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        <div 
          className="project-image"
          style={{ backgroundImage: `url(${projectimage})` }}
        >
          <div className="project-overlay">
            <h3>{project.title}</h3>
          </div>
        </div>
        <div className="project-details">
          <p className="project-description">{project.description}</p>
          
          <div className="technologies">
            <h4>Technologies Used:</h4>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-links">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="code-btn">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;