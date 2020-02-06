import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <img
          src="https://i.postimg.cc/1XZ89k3T/Photo-Omerrr.jpg"
          alt="image"
          className="box-img"
        />
        <h1>Ömer Faruk Sözcü</h1>
        <h5>Web Developer</h5>
        <p>
          A dynamic and motivated person with a proven record of generating and
          building relationships, managing projects from concept to completion
          with the multidisciplinary approach, designing educational strategies
          and curriculums, and coaching individuals to success.
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/omer.zeynep.5055" target="_blank">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/OmerFSozcu" target="_blank">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/omerfsozcu/" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://omersozcucv.netlify.com/" target="_blank">
              <i className="fas fa-link" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Omer975" target="_blank">
              <i className="fab fa-github-square" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
