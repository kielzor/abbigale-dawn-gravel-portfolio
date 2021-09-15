import { CaseStudiesCard } from "./CaseStudiesCard";

import "./CaseStudiesCard.css";

export const CaseStudies = () => {
  const caseStudies = [
    {
      project: "NASA Redesign Sprint",
      imageName: "nasa-overview",
      link: "nasa",
    },
    {
      project: "App Creation: InkBook",
      imageName: "inkbook-overview",
      link: "inkbook",
    },
    {
      project: "App Creation: Bloom",
      imageName: "bloom-overview",
      link: "bloom",
    },
  ];

  return (
    <div className="case-studies-section">
      {caseStudies.map((project) => (
        <CaseStudiesCard
          key={project["project"]}
          project={project}
        ></CaseStudiesCard>
      ))}
    </div>
  );
};
