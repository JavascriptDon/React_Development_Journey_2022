import React from "react";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/linkedin.png";

export default function Main() {
  return (
    <div className="main">
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <h5>laurasmith.website</h5>
      <div className="button-container">
        <button className="email">
          <img src={Mail} alt="mail.png" />
          <span>Email</span>
        </button>
        <button className="linkedin">
          <img src={LinkedIn} alt="linkedin.png" />
          <span>LinkedIn</span>
        </button>
      </div>
      <h3>About</h3>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3>Interests</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
