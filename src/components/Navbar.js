import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          MyPortfolio
        </a>
        <div className="menu-icon" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMenu}>
            About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;