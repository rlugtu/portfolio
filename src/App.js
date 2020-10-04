import React from "react";
import "./App.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Resume from "./assets/resume.pdf";
const useStyles = makeStyles((theme) => ({
  contactIcon: {
    fontSize: 80,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: 60,
    },
    "&:hover": {
      border: "1px solid white",
      borderRadius: 5,
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
              <a href={Resume} target="_blank">
                <AssignmentIcon
                  className={classes.contactIcon}
                ></AssignmentIcon>
              </a>
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
          <div className="techStackIcons">
            <h2 className="contentTitles">Tech Stack</h2>

            <div className="techStackContainer">
              <i className="devicon-html5-plain-wordmark devicon"></i>
              <i className="devicon-css3-plain-wordmark devicon"></i>
              <i className="devicon-javascript-plain devicon"></i>
              <i className="devicon-nodejs-plain-wordmark devicon"></i>
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
      </div>
      <div className="projectContainer">
        <div className="projectsContent">
          <h2 className="contentTitles">Projects</h2>
          <div className="welp">
            <a href="https://welpme.herokuapp.com" target="_blank">
              <img
                className="projectThumbnail"
                src="https://i.imgur.com/6DF9uRU.png"
              />
            </a>

            <div className="projectDescription">
              <h3>Welp</h3>

              <p>
                Welp is a business directory app that allows users to find,
                bookmark, and review different businesses. Businesses will be
                accessed through the yelp fusion api.
              </p>
              <div className="projectLinks">
                <a href="https://welpme.herokuapp.com" target="_blank">
                  Live Demo
                </a>
                <a href="https://github.com/rlugtu/welp" target="_blank">
                  GitHub source
                </a>
              </div>
            </div>
          </div>
          <div className="fitpal">
            <a href="https://fitpaltracker.herokuapp.com" target="_blank">
              <img
                className="projectThumbnail"
                src="https://i.imgur.com/X90E6wN.png"
              />
            </a>

            <div className="projectDescription">
              <h3>FitPal</h3>
              <p>
                Fitpal is a fitness planning app that allows users to plan and
                schedule workouts
              </p>
              <div className="projectLinks">
                <a href="https://fitpaltracker.herokuapp.com" target="_blank">
                  Live Demo
                </a>
                <a href="https://github.com/rlugtu/fitpals" target="_blank">
                  GitHub source
                </a>
              </div>
            </div>
          </div>
          <div className="finalfantasy">
            <a
              href="https://vigorous-goldstine-7f8852.netlify.app/"
              target="_blank"
            >
              <img
                className="projectThumbnail"
                src="https://i.imgur.com/8If8U7o.png"
              />
            </a>

            <div className="projectDescription">
              <h3>Final Fantasy Adventure</h3>

              <p>
                Final Fantasy Adventure is a turn based adventure RPG that
                allows users to fight monsters until the final boss is beaten.
              </p>
              <div className="projectLinks">
                <a
                  href="https://vigorous-goldstine-7f8852.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/rlugtu/final-fantasy-adventure"
                  target="_blank"
                >
                  GitHub source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
