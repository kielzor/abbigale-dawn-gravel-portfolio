import "./Resume.css";

export const Resume = () => {
  return (
    <div className="resume-section">
      <div className="resume-header">
        <h1 className="resume-header-text">Resumé</h1>
        <h1 className="resume-name-text">Abbigale Dawn Gravel</h1>
      </div>
      <div className="resume-main-container">
        <div className="resume-main-columns">
          {/* <h2 className="work-header">Titles</h2>
          <p>
            UX Designer, User Researcher, Content Strategist, UX Developer, UX
            Writer
          </p> */}
          <h2 className="work-header">Profile</h2>
          <p className="mobile-resume-sub-text">
            Passionate UX Design professional with strengths in creative writing
            and storytelling, strong research skills and visual design
            instincts, deep empathy, and an attention to detail when executing
            the UX/UI design process from definition to execution.{" "}
          </p>
          <h2 className="work-header">Experience</h2>
          <h4 className="experience-headers">UX/UI Certificate</h4>
          <p className="work-sub-text work-sub-header mobile-resume-sub-text">
            Denver University Trilogy Bootcamp
          </p>
          <p className="work-sub-text mobile-resume-sub-text">As of May 2021</p>
          <h4 className="experience-headers">Tutor and Caregiver</h4>
          <p className="work-sub-text mobile-resume-sub-text">
            Caring for a 2 year old and 6 year old full-time and providing
            stimulating, educational activities
          </p>
          <p className="work-sub-text work-sub-header mobile-resume-sub-text">
            Privately Employed: Lakewood Colorado
          </p>
          <p className="work-sub-text mobile-resume-sub-text">
            Aug 2020 - Dec 2020
          </p>
          <h4 className="experience-headers">Café/Store Manager</h4>
          <p className="work-sub-text mobile-resume-sub-text">
            General manager/hiring manager role
          </p>
          <p className="work-sub-text work-sub-header mobile-resume-sub-text">
            Curds Cheese/Nook Coffee: Littleton Colorado
          </p>
          <p className="work-sub-text mobile-resume-sub-text">
            Apr 2019 - Apr 2020
          </p>
          <h4 className="experience-headers">Band Manager</h4>
          <p className="work-sub-text mobile-resume-sub-text">
            Managing and booking for multiple musical projects, full time,
            including releases and networking responsibilities
          </p>
          <p className="work-sub-text work-sub-header mobile-resume-sub-text">
            Self Employed: Venues all over Oklahoma and Colorado
          </p>
          <p className="work-sub-text mobile-resume-sub-text">2017 - present</p>
        </div>
        <div className="resume-main-columns">
          <h2 className="work-header">Titles</h2>
          <p className="mobile-resume-sub-text">
            UX Designer, User Researcher, Content Strategist, UX Developer, UX
            Writer
          </p>
          <h2 className="work-header">Toolbox</h2>
          <h4 className="toolbox-headers">Technologies</h4>
          <p className="mobile-resume-sub-text">
            Figma, Adobe XD, inVision, Photoshop, VS Code, Github, Miro, Trello,
            Google Slides
          </p>
          <h4 className="toolbox-headers">Skills</h4>
          <p className="mobile-resume-sub-text">
            Writing, storytelling, whiteboarding, heuristic evaluations,
            redlining, sketching, wireframing, prototyping, user interview plans
            and execution, user testing plans and execution, user and site
            flows, information architecture, typeography and color theory,
            awareness of accessibility standards, style guides, affinity
            diagrams, empathy maps, 2x2 and feature priority matrices, painting
            and drawing, creativity.
          </p>
          <h4 className="toolbox-headers">Soft Skills</h4>
          <p className="mobile-resume-sub-text">
            Adaptability, communication, collaboration, self-sufficient,
            self-motivated, personable, receptive to feedback, eager to iterate.
          </p>
        </div>
      </div>
    </div>
  );
};
