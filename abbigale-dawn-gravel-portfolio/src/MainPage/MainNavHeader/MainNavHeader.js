import React from "react";

import "./MainNavHeader.css";
import main from "../../images/main-icon.png";
import linkedIn from "../../images/linked-in.png";
import googlePlus from "../../images/google-plus.png";
import spotify from "../../images/spotify.png";

export class MainNavHeader extends React.Component {
  constructor({ handleNavClick }) {
    super();
    this.handleNavClick = handleNavClick;
    this.isWorkExpanded = false;
    this.state = { isWorkExpanded: false };
  }

  render() {
    const handleDropdown = (isExpanded) => {
      this.isWorkExpanded = isExpanded;
      this.setState({ isWorkExpanded: this.isWorkExpanded });
    };
    const logoLinks = {
      linkedIn: "https://www.linkedin.com/in/abbigale-gravel-3287711b8/",
      googlePlus: "https://www.google.com/",
      spotify: "https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P",
    };

    return (
      <div className="main-nav-container">
        <div className="main-nav-primary-container">
          <div
            className="logo-container"
            onClick={() => this.handleNavClick("profile")}
          >
            <img
              src={main}
              alt="Abbigale Dawn Personal Logo"
              className="main-nav-logo"
            />
            <h3 className="logo-text">Abbigale Dawn Gravel</h3>
          </div>
          <div
            className="nav-text-container"
            onMouseLeave={() => handleDropdown(false)}
          >
            <div onMouseEnter={() => handleDropdown(true)}>
              <h2 className="main-nav-text">Work</h2>
              {this.isWorkExpanded && (
                <div className="work-subheader-container">
                  <h2
                    className="sub-nav-text"
                    onClick={() => this.handleNavClick("work")}
                  >
                    UX/UI
                  </h2>
                  <h2
                    className="sub-nav-text"
                    onClick={() => this.handleNavClick("music")}
                  >
                    Music
                  </h2>
                  <h2
                    className="sub-nav-text"
                    onClick={() => this.handleNavClick("writing")}
                  >
                    Writing
                  </h2>
                </div>
              )}
            </div>
            <h2
              className="main-nav-text"
              onClick={() => this.handleNavClick("resume")}
            >
              Resumé
            </h2>
            <h2
              className="main-nav-text"
              onClick={() => this.handleNavClick("contact")}
            >
              Contact
            </h2>
          </div>
        </div>
        <div className="nav-footer-container">
          <div className="social-media-container">
            <img
              className="social-media-logo"
              src={linkedIn}
              alt="LinkedIn logo"
              onClick={() => window.open(logoLinks.linkedIn, "_blank")}
            />
            {/* <img
              className="social-media-logo"
              src={googlePlus}
              alt="Google Logo"
              onClick={() => window.open(logoLinks.googlePlus, "_blank")}
            /> */}
            <img
              className="social-media-logo"
              src={spotify}
              alt="Spotify Logo"
              onClick={() => window.open(logoLinks.spotify, "_blank")}
            />
          </div>
          <p className="copyright-text">Copyright 2021</p>
        </div>
      </div>
    );
  }
}
