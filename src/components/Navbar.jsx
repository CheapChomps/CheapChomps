import "./NavbarStyles.css";
import { Component } from "react";
import logoSvg from "../assets/cheapchomp.svg";
import AuthDetails from "./auth/AuthDetails"

import { Link, useMatch, useResolvedPath } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  handleCloseOutsideNavbar = (event) => {
    const navbar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu");

    if (
      this.state.clicked &&
      !navbar.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      this.setState({
        clicked: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleCloseOutsideNavbar);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleCloseOutsideNavbar);
  }

  render() {
    const navClass = this.state.clicked ? "navbar-open" : "";
    return (
      <div>
        <nav className={navClass}>
          <Link to="/">
            <img style={{ width: "12rem" }} src={logoSvg} />
          </Link>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <Customlink to="/">Home</Customlink>
              <Customlink to="/HowThisWorks">How this works</Customlink>
              <Customlink to="/Pantry">My Pantry</Customlink>
              <Customlink to="/AboutUs">About Us</Customlink>
              <AuthDetails />

              

              {/* <div>
                {authUser ? (
                  <>
                    <p>{`Logged In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign out</button>
                  </>
                ) : (
                  <p>Signed Out</p>
                )}
              </div> */}
            </ul>
          </div>

          <div id="menu" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-xmark" : "fas fa-user"}
            ></i>
          </div>
        </nav>
        {this.state.clicked && <div id="overlay" />}
      </div>
    );
  }
}

export default Navbar;

export const Customlink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} {...props} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
};
