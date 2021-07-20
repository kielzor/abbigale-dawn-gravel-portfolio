import "./WorkMainUXUI.css";

import designProcess from "../../../images/design-process.png";

export const WorkMainUXUI = () => {
  return (
    <div className="ux-ui-section-container">
      <div className="ux-ui-section">
        <div className="ux-ui-header-and-p1-container">
          <p className="ux-ui-text">
            As a UX/UI designer with a background in music and writing I use a
            deeply empathetic approach to creatively solve problems.
          </p>
        </div>
        <p className="ux-ui-text">
          I enjoy the community aspect of teamwork, having been a member and
          manager of many musical projects over the years.
        </p>
        <p className="ux-ui-text">
          I love learning about the way people interact with technology, and
          inventing thoughtful solutions to all kinds of pain points.
        </p>
      </div>
      <img
        className="design-process-diamonds"
        src={designProcess}
        alt="Design Process Diamonds"
      />
    </div>
  );
};
