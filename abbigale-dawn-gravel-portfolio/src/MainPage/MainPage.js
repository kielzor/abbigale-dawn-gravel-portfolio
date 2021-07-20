import { MainNavHeader } from "./MainNavHeader/MainNavHeader";
import { Profile } from "./Profile/Profile";
import { Music } from "./Music/Music";
import { CaseStudies } from "./Work/CaseStudies/CaseStudies";
import { TechSkills } from "./Work/TechSkills/TechSkills";
import { SoftSkills } from "./Work/SoftSkills/SoftSkills";
import { WorkMainUXUI } from "./Work/WorkMainUXUI/WorkMainUXUI";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

import arrow from "../images/arrow.png";

import "./MainPage.css";
import React from "react";
import { Writing } from "./Writing/Writing";
import { Resume } from "./Resume/Resume";

export class MainPage extends React.Component {
  constructor() {
    super();
    this.workToDisplay = 0;
    this.state = { workToDisplay: 0 };
  }

  render() {
    const handleWorkSectionNav = (direction) => {
      if (direction === 3 || this.workToDisplay === 0) {
        this.workToDisplay = direction;
      } else this.workToDisplay += direction;
      handleNavClick("realignWork");
      this.setState({ workToDisplay: this.workToDisplay });
    };

    const handleHeaderSwitches = () => {
      switch (this.workToDisplay) {
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
        this.workToDisplay = 0;
        this.setState({ workToDisplay: this.workToDisplay });
      } else if (position === "realignWork") position = "work";

      console.log(position);
      const scrollTo = document.querySelector(`.${position}`);
      console.log(scrollTo);

      if (!scrollTo) return;

      window.scroll({ top: scrollTo.offsetTop, left: 0, behavior: "smooth" });
    };

    return (
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
                    this.workToDisplay === 1 || this.workToDisplay === 2
                      ? "left-work-header"
                      : "center-work-header"
                  }
                >
                  {this.workToDisplay === 0 && (
                    <h1 className="work-header-text">UX/UI</h1>
                  )}
                  {this.workToDisplay === 1 && (
                    <h1 className="work-header-text-small">User Experience</h1>
                  )}
                  {this.workToDisplay === 2 && (
                    <h1 className="work-header-text-small">Soft Skills</h1>
                  )}
                  {this.workToDisplay === 3 && (
                    <h1 className="work-header-text">CASE STUDIES</h1>
                  )}
                </div>
              </div>
              <div className="work-container">
                <div className="arrow-spacing">
                  {this.workToDisplay !== 0 && (
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="arrow left-arrow"
                      onClick={() => handleWorkSectionNav(-1)}
                    />
                  )}
                </div>
                <div className="main-work-section">
                  {this.workToDisplay === 0 && <WorkMainUXUI></WorkMainUXUI>}
                  {this.workToDisplay === 1 && <TechSkills></TechSkills>}
                  {this.workToDisplay === 2 && <SoftSkills></SoftSkills>}
                  {this.workToDisplay === 3 && <CaseStudies></CaseStudies>}
                </div>
                <div className="arrow-spacing">
                  {this.workToDisplay !== 3 && (
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="arrow"
                      onClick={() => handleWorkSectionNav(1)}
                    />
                  )}
                </div>
              </div>
              {this.workToDisplay !== 3 && (
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
    );
  }
}
