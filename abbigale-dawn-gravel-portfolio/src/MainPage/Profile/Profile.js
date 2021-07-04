import "./Profile.css";

import profile from "../../images/profile.png";

export const Profile = ({ handleNavClick }) => {
  return (
    <div className="profile-section">
      <div className="bio-header-container">
        <p className="bio-text top-bio-text">Hello,</p>
        <p className="bio-text">
          I'm <span className="bold-name-text">Abbigale Dawn Gravel</span>.
        </p>
      </div>
      <div className="profile-pic-container">
        <img className="profile-pic" src={profile} />
      </div>
      <p className="bio-text">
        I design{" "}
        <span className="bold-text" onClick={() => handleNavClick("work")}>
          visually,{" "}
        </span>
        <span className="bold-text" onClick={() => handleNavClick("music")}>
          audibly,{" "}
        </span>
        &{" "}
        <span className="bold-text" onClick={() => handleNavClick("tbd")}>
          creatively
        </span>
        .
      </p>
    </div>
  );
};
