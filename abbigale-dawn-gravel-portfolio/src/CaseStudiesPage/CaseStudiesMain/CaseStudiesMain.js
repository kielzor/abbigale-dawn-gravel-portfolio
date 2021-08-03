import "./CaseStudiesMain.css";

import arrow from "../../images/arrow.png";
import React, { useState } from "react";

export const CaseStudiesMain = ({ caseStudyData }) => {
  let [imageToDisplay, setImageToDisplay] = useState(1);

  const handleImageSwitch = (direction) => {
    imageToDisplay += direction;
    if (imageToDisplay === 0) {
      imageToDisplay = caseStudyData.imageNum;
    } else if (imageToDisplay > caseStudyData.imageNum) {
      imageToDisplay = 1;
    }
    setImageToDisplay(imageToDisplay);
  };

  return (
    <div className="case-studies-main-container">
      <div className="description-container">
        {caseStudyData.description.map((text, i) => {
          return (
            <p className="case-studies-description-text" key={i}>
              {text}
            </p>
          );
        })}
        <div className="team-and-type-container">
          <p>TEAM: {caseStudyData.team}</p>
          <p>TYPE: {caseStudyData.type}</p>
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
              caseStudyData.imageName +
              imageToDisplay +
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
};
