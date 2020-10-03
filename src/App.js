import React from "react";
import "./App.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  contactIcon: {
    fontSize: 80,
    cursor: "pointer",
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
            <Tooltip title="LinkedIn" hover="pointer">
              <a href="https://www.linkedin.com/in/ryan-lugtu/" target="_blank">
                <LinkedInIcon className={classes.contactIcon}></LinkedInIcon>
              </a>
            </Tooltip>
            <Tooltip title="GitHub">
              <a href="https://github.com/rlugtu" target="_blank">
                <GitHubIcon className={classes.contactIcon}></GitHubIcon>
              </a>
            </Tooltip>
            <Tooltip title="Email">
              <a href="mailto:ryanlugtu@gmail.com?subject=">
                <EmailIcon className={classes.contactIcon}></EmailIcon>
              </a>
            </Tooltip>

            <Tooltip title="Resume">
              <AssignmentIcon className={classes.contactIcon}></AssignmentIcon>
            </Tooltip>
          </ul>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="contentTitles">About</h2>
          <p>
            Hello! I'm Ryan, a software engineer and full-stack developer. With
            a passion for creation and a fascination for coding, I joined
            General Assembly's Software Engineering Immersive Program. Following
            the completion of over 500 hours of learning full-stack development,
            I could not feel more fulfilled. I have a thirst for knowledge and
            I'm driven to improve at what I do. When I'm not at my computer, you
            can find me working out, working on my car, or playing tennis.
          </p>
          <h2 className="contentTitles">Tech Stack</h2>
          <div className="techStackIcons">
            <div className="techStackContainer"></div>
            <i className="devicon-html5-plain-wordmark devicon"></i>
            <i className="devicon-css3-plain-wordmark devicon"></i>
            <i className="devicon-javascript-plain devicon"></i>
            <i class="devicon-nodejs-plain-wordmark devicon"></i>
            <i className="devicon-react-original-wordmark devicon"></i>
            <i className="devicon-express-original-wordmark devicon"></i>
            <i className="devicon-ruby-plain-wordmark devicon"></i>
            <img
              className="sqlIcon"
              src="https://www.flaticon.com/svg/static/icons/svg/29/29594.svg"
            />
            <i className="devicon-postgresql-plain-wordmark devicon"></i>
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
