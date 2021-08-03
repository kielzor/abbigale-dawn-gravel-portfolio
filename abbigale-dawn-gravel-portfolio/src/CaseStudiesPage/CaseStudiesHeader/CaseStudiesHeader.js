import { Link } from "react-router-dom";
import "./CaseStudiesHeader.css";

export const CaseStudiesHeader = ({ headerText, headerClass }) => {
  return (
    <div>
      <Link className="main-page-link" to="/abbigale-dawn-gravel-portfolio/">
        Back to Case Studies
      </Link>
      <div className={headerClass}>
        <h1 className="header-text">{headerText}</h1>
      </div>
    </div>
  );
};
