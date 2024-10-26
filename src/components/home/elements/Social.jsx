import React from "react";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/yashbhatt30/"
        className="home__social-icon"
        target='_blank'
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Y-ashbhatt"
        className="home__social-icon"
        target='_blank'
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="mailto:30y.bhatt@gmail.com"
        className="home__social-icon"
        target='_blank'
      >
        <i className="uil uil-envelope-alt"></i>
      </a>
    </div>
  );
}
