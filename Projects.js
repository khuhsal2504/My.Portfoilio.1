import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Amazon Clone</h3>
        <p className="about-description">
          Developed a responsive e-commerce website inspired by Amazon, featuring product listings,
          a search interface, and a cart system. Focused on clean UI, smooth navigation, and
          user-friendly design.
        </p>

        <p><b>Tech:</b> React.js, REST APIs, HTML, CSS, JavaScript</p>

        <a
          href="https://t25khushaln.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          View Live Project
        </a>
      </div>
    </section>
  );
}

export default Projects;
