import "./Music.css";

export const Music = () => {
  const spotifyLink = "https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P";

  return (
    <div className="music-container">
      <div className="music-header-container">
        <h1 className="music-header-text">MUSIC</h1>
      </div>
      <div className="main-music-section">
        <p>
          I built a career for myself as a singer-songwriter in my home state of
          Oklahoma, where I traveled throughout the counties performing at a
          variety of venues and locations. I managed my own booking, press, and
          merchandise, then went on to manage a full band.
          <p>
            I currently make music in Colorado as a solo artist along with duo,
            trio, and full band setups. I enjoy producing my own tracks and
            organizing my own releases, along with designing and creating my own
            merch.
          </p>
        </p>
        <div className="split-music-section-view">
          <p className="split-music-section-text">
            Being a musician has given me the oppourtunity to observe the way
            people interact with art, and an understanding of what it means to
            audibly design.
          </p>
          <div className="split-music-section-image"></div>
        </div>
        <div className="music-button-container">
          <button
            className="music-button"
            onClick={() => window.open(spotifyLink, "_blank")}
          >
            LISTEN ON SPOTIFY
          </button>
        </div>
      </div>
    </div>
  );
};
