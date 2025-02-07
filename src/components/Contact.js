import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via any of the platforms below.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/khushi-singh-452431272" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:51110104636@piemr.edu.in.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="social-icon" />
        </a>
        
      </div>
    </div>
  );
}

export default Contact;