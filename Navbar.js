import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Khushal Nikam</h2>
      <div>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#resume" className="nav-link">Resume</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
