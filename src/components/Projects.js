import React from 'react';
import './Projects.css';

// Import images - this ensures they're bundled correctly
// If image doesn't exist, it will show an error at build time
const projectImages = {
  microservices: process.env.PUBLIC_URL + '/images/projects/microservices.png',
  timetable: process.env.PUBLIC_URL + '/images/projects/timetable.png',
  chatbot: process.env.PUBLIC_URL + '/images/projects/chatbots.jpg',
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Microservices Architecture',
      description: 'A comprehensive microservices-based architecture project using Java and Spring Boot. Demonstrates service discovery, centralized configuration, API routing, and integration of key Spring Cloud components for building scalable distributed systems.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'REST APIs'],
      githubUrl: 'https://github.com/mansimm/Project_Microservices/tree/master',
      imageUrl: projectImages.microservices,
    },
    {
      id: 2,
      title: 'Automatic Timetable Generator',
      description: 'An Android application that automatically generates timetables for colleges. Takes inputs like subjects, teachers, available classrooms, labs, and hours per week to create optimized schedules efficiently.',
      technologies: ['Java', 'Android', 'Algorithm', 'Optimization'],
      githubUrl: 'https://github.com/mansimm/Atomatic-Timetable-Generator',
      imageUrl: projectImages.timetable,
    },
    {
      id: 3,
      title: 'Seq2Seq Chatbot',
      description: 'A deep learning chatbot implemented using Sequence-to-Sequence (Seq2Seq) architecture with TensorFlow. Utilizes Natural Language Processing to provide automatic replies and relevant information to users.',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'NLP', 'Seq2Seq'],
      githubUrl: 'https://github.com/mansimm/Seq2seq-Chatbot',
      imageUrl: projectImages.chatbot,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one represents a unique challenge
          and learning experience.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  onError={(e) => {
                    console.error('Image failed to load:', project.imageUrl);
                    // Show a placeholder or hide the image
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.innerHTML = '<span style="color: #9ca3af;">Image not found</span>';
                  }}
                />
                <div className="project-overlay">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn project-action-github"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

