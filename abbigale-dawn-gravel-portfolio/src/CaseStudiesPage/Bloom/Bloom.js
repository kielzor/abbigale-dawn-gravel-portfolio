import "./Bloom.css";
import { CaseStudiesHeader } from "../CaseStudiesHeader/CaseStudiesHeader";

export const Bloom = () => {
  const headerText = "App Creation: Bloom";
  const headerClass = "bloom-header-image";

  return (
    <div>
      <CaseStudiesHeader headerText={headerText} headerClass={headerClass} />
      <div className="bloom-header-to-page-spacing" />
      <div className="bloom-case-study-full-page" />
      <div className="bloom-bottom-spacing"></div>
    </div>
  );
};
