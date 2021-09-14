import "./Nasa.css";
import { CaseStudiesHeader } from "../CaseStudiesHeader/CaseStudiesHeader";

export const Nasa = () => {
  const headerText = "Nasa Redesign Sprint";
  const headerClass = "nasa-header-image";

  return (
    <div>
      <CaseStudiesHeader headerText={headerText} headerClass={headerClass} />
      <div className="nasa-header-to-page-spacing" />
      <div className="nasa-case-study-full-page" />
    </div>
  );
};
