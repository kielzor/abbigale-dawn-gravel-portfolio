import "./MobileProfile.css";

import profile from "../../images/profile.png";

export const MobileProfile = ({ handleNavClick }) => {
  return (
    <div className="mobile-profile-section">
      <div className="mobile-bio-header-container">
        <p className="mobile-bio-text mobile-top-bio-text">Hello,</p>
        <p className="mobile-bio-text">
          I'm <span className="bold-name-text">Abbigale Dawn Gravel</span>.
        </p>
      </div>
      <div className="mobile-profile-pic-container">
        <img className="mobile-profile-pic" src={profile} />
      </div>
      <p className="mobile-bio-text">
        I design{" "}
        <span
          className="mobile-bold-text"
          onClick={() => handleNavClick("mobile-work")}
        >
          visually,{" "}
        </span>
        <span
          className="mobile-bold-text"
          onClick={() => handleNavClick("mobile-music")}
        >
          audibly,{" "}
        </span>
        &{" "}
        <span
          className="mobile-bold-text"
          onClick={() => handleNavClick("mobile-writing")}
        >
          creatively
        </span>
        .
      </p>
    </div>
  );
};
