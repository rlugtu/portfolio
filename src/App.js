import React from "react";
import "./App.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contactIcon: {
    fontSize: 80,
    [theme.breakpoints.down("xs")]: {
      fontSize: 60,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="headerContainer">
        <div className="headerContent">
          <h1 className="name type-animation">Ryan Lugtu.</h1>
          <h3> Software Engineer</h3>
          <h3>Fullstack Developer</h3>
          <ul className="contactInfo">
            <LinkedInIcon className={classes.contactIcon}></LinkedInIcon>
            <GitHubIcon className={classes.contactIcon}></GitHubIcon>
            <EmailIcon className={classes.contactIcon}></EmailIcon>
            <AssignmentIcon className={classes.contactIcon}></AssignmentIcon>
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
