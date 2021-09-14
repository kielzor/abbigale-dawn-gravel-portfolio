import "./Nasa.css";
import { CaseStudiesHeader } from "../CaseStudiesHeader/CaseStudiesHeader";
import { CaseStudiesMain } from "../CaseStudiesMain/CaseStudiesMain";

export const Nasa = () => {
  const headerText = "Nasa Redesign Sprint";
  const headerClass = "nasa-header-image";

  const caseStudyData = {
    description: [
      "Our task of redesigning the navigation for NASA.gov felt necessary, since we kept seeing space enthusiasts become overwhelmed with the site, rapidly losing the wonder NASA aims to inspire.  This project taught me a lot about fostering delight through simple design, and the importance of the relationship between a brand and their user.",
    ],
    team: "Abbigale Gravel, Rocky Pitto, Kyle Donovan",
    type: "3 week sprint",
    imageName: "nasa",
    imageNum: 6,
  };

  return (
    <div className="case-studies-full-page">
      <CaseStudiesHeader headerText={headerText} headerClass={headerClass} />
      <CaseStudiesMain caseStudyData={caseStudyData} />
    </div>
  );
};
