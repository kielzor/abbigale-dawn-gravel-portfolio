import "./CaseStudiesMain.css";

import arrow from "../../images/arrow.png";
import React from "react";

export class CaseStudiesMain extends React.Component {
  constructor() {
    super();
    this.imageToDisplay = 1;
    this.state = { imageToDisplay: 1 };
  }

  render() {
    const handleImageSwitch = (direction) => {
      this.imageToDisplay += direction;
      if (this.imageToDisplay === 0) {
        this.imageToDisplay = this.props.caseStudyData.imageNum;
      } else if (this.imageToDisplay > this.props.caseStudyData.imageNum) {
        this.imageToDisplay = 1;
      }
      this.setState({ imageToDisplay: this.imageToDisplay });
    };

    return (
      <div className="case-studies-main-container">
        <div className="description-container">
          {this.props.caseStudyData.description.map((text, i) => {
            return (
              <p className="case-studies-description-text" key={i}>
                {text}
              </p>
            );
          })}
          <div className="team-and-type-container">
            <p>TEAM: {this.props.caseStudyData.team}</p>
            <p>TYPE: {this.props.caseStudyData.type}</p>
          </div>
        </div>
        <div className="case-studies-main-section">
          <div className="arrow-spacing">
            <img
              src={arrow}
              alt="Arrow"
              className="arrow left-arrow"
              onClick={() => handleImageSwitch(-1)}
            />
          </div>
          <div className="main-case-studies-content">
            <img
              src={
                process.env.PUBLIC_URL +
                "/project-images/" +
                this.props.caseStudyData.imageName +
                this.state.imageToDisplay +
                ".png"
              }
              alt="**Project Icon**"
            />
          </div>
          <div className="arrow-spacing">
            <img
              src={arrow}
              alt="Arrow"
              className="arrow"
              onClick={() => handleImageSwitch(1)}
            />
          </div>
        </div>
      </div>
    );
  }
}
