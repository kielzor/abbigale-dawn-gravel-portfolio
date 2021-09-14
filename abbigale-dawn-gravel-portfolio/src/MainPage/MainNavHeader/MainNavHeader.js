import React, { useState } from "react";

import "./MainNavHeader.css";
import main from "../../images/main-icon.png";
import linkedIn from "../../images/linked-in.png";
import spotify from "../../images/spotify.png";

export const MainNavHeader = ({ handleNavClick }) => {
  let [isWorkExpanded, setIsWorkExpanded] = useState(false);

  const logoLinks = {
    linkedIn: "https://www.linkedin.com/in/abbigale-gravel-3287711b8/",
    spotify: "https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P",
  };

  return (
    <div className="main-nav-container">
      <div className="main-nav-primary-container">
        <div
          className="logo-container"
          onClick={() => handleNavClick("profile")}
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
          onMouseLeave={() => setIsWorkExpanded(false)}
        >
          <div onMouseEnter={() => setIsWorkExpanded(true)}>
            <h2 className="main-nav-text">Work</h2>
            {isWorkExpanded && (
              <div className="work-subheader-container">
                <h2
                  className="sub-nav-text"
                  onClick={() => handleNavClick("work")}
                >
                  UX/UI
                </h2>
                <h2
                  className="sub-nav-text"
                  onClick={() => handleNavClick("music")}
                >
                  Music
                </h2>
                <h2
                  className="sub-nav-text"
                  onClick={() => handleNavClick("writing")}
                >
                  Writing
                </h2>
              </div>
            )}
          </div>
          <h2
            className="main-nav-text"
            onClick={() => handleNavClick("resume")}
          >
            Resumé
          </h2>
          <h2
            className="main-nav-text"
            onClick={() => handleNavClick("contact")}
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
            onClick={() => window.open(logoLinks.linkedIn)}
          />
          <img
            className="social-media-logo"
            src={spotify}
            alt="Spotify Logo"
            onClick={() => window.open(logoLinks.spotify)}
          />
        </div>
        <p className="copyright-text">Copyright 2021</p>
      </div>
    </div>
  );
};
