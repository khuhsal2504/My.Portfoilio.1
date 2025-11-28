import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p>You can upload your resume here as a PDF.</p>
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
