import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        {/* Description Box */}
        <div className="about-description-box">
          <p>
        
          My name is Khushi Singh, and I am a B.Tech student in the Computer Science Engineering branch 
          at Prestige Institute of Engineering Management and Research. I have a strong passion for
         coding and enjoy working with technologies like Java, HTML, CSS, MySQL, and Servlets.
          I am always eager to learn new programming languages and expand my skill set.
          </p>
          <p>
          I believe in continuous learning and problem-solving, 
          which drives me to take on new challenges in the tech world. My goal is to enhance my expertise in
          full-stack development and contribute to innovative projects. Apart from coding, I enjoy exploring the
          latest trends in technology and improving my logical thinking skills.
         
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;