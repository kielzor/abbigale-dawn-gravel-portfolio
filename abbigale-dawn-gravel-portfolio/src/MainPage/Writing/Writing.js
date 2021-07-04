import "./Writing.css";

export const Writing = () => {
  const spotifyLink = "https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P";

  return (
    <div className="writing-container">
      <div className="writing-header-container">
        <h1 className="writing-header-text">WRITING</h1>
      </div>
      <div className="main-writing-section">
        <p>
          I’ve been writing since I was a little girl, finishing my first
          full-length novel at the age of fourteen years old. I enjoy UX
          writing, along with creative writing in the forms of novels, novellas,
          and short stories of all genres. I currently write for a small
          magazine, publish short stories on Inkitt, and am hopeful to pursue
          publication of a full-length novel within the next few years.
        </p>
        <div className="writing-images-container">
          <div className="writing-image"></div>
          <div className="writing-image"></div>
        </div>
      </div>
    </div>
  );
};
