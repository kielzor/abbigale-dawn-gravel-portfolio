import "./Bloom.css";
import { CaseStudiesHeader } from "../CaseStudiesHeader/CaseStudiesHeader";
import { CaseStudiesMain } from "../CaseStudiesMain/CaseStudiesMain";

export const Bloom = () => {
  const headerText = "App Creation: Bloom";
  const headerClass = "bloom-header-image";

  const caseStudyData = {
    description: [
      "Bloom is an app for plant lovers, with ways to connect to other plant enthusiasts outside of the screen.",
      "I learned a lot from this project about how people find happiness. I realized I love plants because I need life around me - need to witness growth to believe I, myself, am growing. Shortly after I moved here, working full time and struggling to make friends, the pandemic struck, and I feel I didn’t get much of a chance to bloom.",
    ],
    team: "Abbigale Gravel, Jenny Duarte, Rachael Chagnon",
    type: "3 week sprint",
    imageName: "bloom",
    imageNum: 5,
  };

  return (
    <div className="case-studies-full-page">
      <CaseStudiesHeader headerText={headerText} headerClass={headerClass} />
      <CaseStudiesMain caseStudyData={caseStudyData} />
    </div>
  );
};
