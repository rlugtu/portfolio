import React from "react";
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    <nav className={props.navBar ? "navBarActive" : "navBar"}>
      <ul>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
