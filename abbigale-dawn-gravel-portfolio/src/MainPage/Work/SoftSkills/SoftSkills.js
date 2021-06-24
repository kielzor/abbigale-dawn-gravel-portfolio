import "./SoftSkills.css";

export const SoftSkills = () => {
  const softSkillsLeft = [
    "Collaboration",
    "Leadership and Team Management",
    "Writing (UX and Creative)",
    "Public Speaking/Presenting",
  ];
  const softSkillsRight = [
    "Diplomacy",
    "Openness to Feedback",
    "Eagerness to Improve",
    "Creativity in All Areas",
  ];
  const proficienciesLeft = ["Figma", "Adobe XD", "Miro"];
  const proficienciesRight = ["Trello", "CSS", "HTML", "Photoshop"];

  return (
    <div className="soft-skills-section">
      <h2 className="tech-skills-subheader">
        I’ve learned a number of soft skills that helped me thrive in all my
        endeavors, and connect with people along the way:
      </h2>
      <div className="soft-skills-containers">
        <ul className="soft-skills-list-container-left">
          {softSkillsLeft.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <ul className="soft-skills-list-container-right">
          {softSkillsRight.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <h1 className="soft-skills-section-headers">Proficiencies</h1>
      <h2 className="tech-skills-subheader">
        Learning new softwares always reminds me how fast the tech world is
        growing, and I feel lucky to be a part of it. I’m currently profficient
        in several softwares, including the following:
      </h2>
      <div className="soft-skills-containers">
        <ul className="soft-skills-list-container-left">
          {proficienciesLeft.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <ul className="soft-skills-list-container-right">
          {proficienciesRight.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
