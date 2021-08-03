import React from "react";
import { Link } from "react-router-dom";

import "./CaseStudies.css";

export const CaseStudiesCard = ({ project }) => {
  const handleCaseStudiesNav = () => {};

  return (
    <div className="project" onClick={handleCaseStudiesNav}>
      <Link
        to={`/abbigale-dawn-gravel-portfolio/${project.link}`}
        className="project-text"
      >
        {project["project"]}
      </Link>
      <Link
        to={`/abbigale-dawn-gravel-portfolio/${project.link}`}
        className={`${project["link"]}-image`}
      >
        <img
          src={
            process.env.PUBLIC_URL +
            "/project-images/" +
            project["imageName"] +
            ".png"
          }
          alt="**Project Icon**"
        />
      </Link>
    </div>
  );
};
