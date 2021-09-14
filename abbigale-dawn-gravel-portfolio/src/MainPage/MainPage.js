import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { MainNavHeader } from "./MainNavHeader/MainNavHeader";
import { Profile } from "./Profile/Profile";
import { MobileProfile } from "./Profile/MobileProfile";
import { Music } from "./Music/Music";
import { CaseStudies } from "./Work/CaseStudies/CaseStudies";
import { TechSkills } from "./Work/TechSkills/TechSkills";
import { SoftSkills } from "./Work/SoftSkills/SoftSkills";
import { WorkMainUXUI } from "./Work/WorkMainUXUI/WorkMainUXUI";
import { Contact } from "./Contact/Contact";
import { Writing } from "./Writing/Writing";
import { Resume } from "./Resume/Resume";

import arrow from "../images/arrow.png";
import "./MainPage.css";

export const MainPage = () => {
  const history = useHistory();
  let [workToDisplay, setWorkToDisplay] = useState(0);

  useEffect(() => {
    if (history.action === "PUSH") {
      handleNavClick("work");
      setWorkToDisplay(3);
    }
  }, [history]);

  const handleWorkSectionNav = (direction) => {
    if (direction === 3 || workToDisplay === 0) {
      workToDisplay = direction;
    } else workToDisplay += direction;
    handleNavClick("realignWork");
    setWorkToDisplay(workToDisplay);
  };

  const handleHeaderSwitches = () => {
    switch (workToDisplay) {
      case 0:
        return "work-header-container ux-ui-header-container";
      case 1:
        return "work-header-container tech-skills-header-container";
      case 2:
        return "work-header-container soft-skills-header-container";
      case 3:
        return "work-header-container case-studies-header-container";
    }
  };

  const handleNavClick = (position) => {
    if (position === "work") {
      workToDisplay = 0;
      setWorkToDisplay(workToDisplay);
    } else if (position === "realignWork") position = "work";

    const scrollTo = document.querySelector(`.${position}`);
    if (!scrollTo) return;
    window.scroll({ top: scrollTo.offsetTop, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="full-page-container">
        <MainNavHeader handleNavClick={handleNavClick}></MainNavHeader>
        <div className="main-section-container">
          <div className="profile">
            <Profile handleNavClick={handleNavClick}></Profile>
          </div>
          <div className="work">
            <div>
              <div className={handleHeaderSwitches()}>
                <div
                  className={
                    workToDisplay === 1 || workToDisplay === 2
                      ? "left-work-header"
                      : "center-work-header"
                  }
                >
                  {workToDisplay === 0 && (
                    <h1 className="work-header-text">UX/UI</h1>
                  )}
                  {workToDisplay === 1 && (
                    <h1 className="work-header-text-small">User Experience</h1>
                  )}
                  {workToDisplay === 2 && (
                    <h1 className="work-header-text-small">Soft Skills</h1>
                  )}
                  {workToDisplay === 3 && (
                    <h1 className="work-header-text">Case Studies</h1>
                  )}
                </div>
              </div>
              <div className="work-container">
                <div className="arrow-spacing">
                  {workToDisplay !== 0 && (
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="arrow left-arrow"
                      onClick={() => handleWorkSectionNav(-1)}
                    />
                  )}
                </div>
                <div className="main-work-section">
                  {workToDisplay === 0 && <WorkMainUXUI></WorkMainUXUI>}
                  {workToDisplay === 1 && <TechSkills></TechSkills>}
                  {workToDisplay === 2 && <SoftSkills></SoftSkills>}
                  {workToDisplay === 3 && <CaseStudies></CaseStudies>}
                </div>
                {workToDisplay !== 3 && (
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="arrow"
                    onClick={() => handleWorkSectionNav(1)}
                  />
                )}
              </div>
              {workToDisplay !== 3 && (
                <div className="case-studies-button-container">
                  <button
                    className="case-studies-button"
                    onClick={() => handleWorkSectionNav(3)}
                  >
                    CASE STUDIES
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="music">
            <Music></Music>
          </div>
          <div className="writing">
            <Writing></Writing>
          </div>
          <div className="resume">
            <Resume></Resume>
          </div>
          <div className="contact">
            <Contact></Contact>
          </div>
        </div>
      </div>
      {/* Redesign for mobile */}
      <div className="full-page-mobile-container">
        <MobileProfile handleNavClick={handleNavClick}></MobileProfile>
        <h1 className="work-header-text ux-ui-header-container work-header-text-centered">
          UX/UI
        </h1>
        <div className="mobile-work-styling mobile-work">
          <WorkMainUXUI></WorkMainUXUI>
          <h1 className="work-header-text">User Experience</h1>
          <TechSkills></TechSkills>
          <h1 className="work-header-text">Soft Skills</h1>
          <SoftSkills></SoftSkills>
        </div>
        <h1 className="work-header-text case-studies-header-container work-header-text-centered">
          CASE STUDIES
        </h1>
        <div className="mobile-work-styling mobile-case-studies">
          <CaseStudies></CaseStudies>
        </div>
        <div className="mobile-music">
          <Music></Music>
        </div>
        <div className="mobile-writing">
          <Writing></Writing>
        </div>
        <div className="mobile-resume">
          <Resume></Resume>
        </div>
        <div className="mobile-contact">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};
