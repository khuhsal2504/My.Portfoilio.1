import React from "react";
import demo from "./demo.jpg";

function About() {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <img src={demo} alt="" className="profile-image" />
        <div className="about-text">
          <h1 className="name-title">Khushal Shivaji Nikam</h1>
          <p>
            I’m a student focused on building a strong foundation in technology and development.
            My interests include coding, web development, and learning how modern systems work.
            My goal is to become a skilled developer and create real-world solutions through tech.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
