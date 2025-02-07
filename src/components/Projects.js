import React from "react";
import "./Projects.css"; 


const projectsData = [
  {
    id: 1,
    name: "Shakti Mitra",
    description:"Shakti Mitra is a safety-focused mobile app developed using Flutter and Firebase. It helps users in emergency situations by sending real-time alerts and sharing their location with trusted contacts. The app aims to enhance security and accessibility ensuring that users can get help without any delays." ,
    image: "/assets/project1.jpg", 
    github: "https://github.com/Khushi-Vishal/shakti-mitra.git"
  },
  {
    id: 2,
    name: "Idea Exchanging Platform",
    description: "I have developed an idea-exchanging platform website using HTML, CSS, Java, and Servlets. This platform serves as a bridge between students and experts, enabling seamless sharing and discussion of innovative ideas. It fosters collaboration and knowledge exchange, empowering users to connect, learn, and grow together in a dynamic environment.",
    image: "/assets/project2.png",
    github: "https://github.com/Khushi-Vishal/idea-exchange.git"
  },
  {
    id: 3,
    name: "Teacher-Student Dashboard",
    description: "I have developed a Teacher-Student Dashboard using HTML, CSS, JavaScript, Java, and Servlets. This platform allows teachers to assign subject-wise marks to students and provides students with the ability to view their marks. Additionally, teachers can update the marks whenever necessary, making it a dynamic and efficient tool for academic management.",
    image: "/assets/project3.png",
    github: "https://github.com/Khushi-Vishal/teacher-student-dashboard.git"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={'${project.name} screenshot'} className="project-image" />
            <div className="project-info">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-name"
              >
                {project.name}
              </a>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                View Source on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;