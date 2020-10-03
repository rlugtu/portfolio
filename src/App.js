import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <div className="headerContent">
          <h1 className="name type-animation">Ryan Lugtu.</h1>
          <h3> Software Engineer</h3>
          <h3>Fullstack Developer</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Resume</li>
            <li>Mail</li>
          </ul>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="contentTitles">About</h2>
          <p>lorem ipsum</p>
          <div className="techStackContent">
            <h2 className="contentTitles">Tech Stack</h2>
            <p>
              HTML, CSS, Javacript, Node.js, React.js, Express, Ruby, SQL,
              PostgreSQL, Material UI
            </p>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <div className="projectsContent">
          <h2 className="contentTitles">Projects</h2>
          <p>
            HTML, CSS, Javacript, Node.js, React.js, Express, Ruby, SQL,
            PostgreSQL, Material UI
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
