import "./Inkbook.css";
import { CaseStudiesHeader } from "../CaseStudiesHeader/CaseStudiesHeader";
import { CaseStudiesMain } from "../CaseStudiesMain/CaseStudiesMain";

export const Inkbook = () => {
  const headerText = "App Creation: Inkbook";
  const headerClass = "inkbook-header-image";

  const caseStudyData = {
    description: [
      "InkBook was my last project to complete in my program at DU. My team bonded over our love of body art and the pain points we’ve had when looking for reputable artists and studios.",
      "We learned so much during our bootcamp and recieved high praises for our creative presentation and problem solving. I look forward to designing more UI heavy projects with realistic and delightful UX pathways.",
    ],
    team: "Abbigale Gravel, Rocky Pitto, Vanessa De Los Reyes",
    type: "2 week sprint",
    imageName: "inkbook",
    imageNum: 4,
  };

  return (
    <div className="case-studies-full-page">
      <CaseStudiesHeader headerText={headerText} headerClass={headerClass} />
      <CaseStudiesMain caseStudyData={caseStudyData} />
    </div>
  );
};
