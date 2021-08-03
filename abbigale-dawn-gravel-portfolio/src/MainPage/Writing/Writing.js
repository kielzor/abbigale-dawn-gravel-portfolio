import "./Writing.css";

export const Writing = () => {
  const handlePdfDownload = () => {
    console.log("handle");
  };
  return (
    <div className="writing-container">
      <div className="writing-header-container">
        <h1 className="writing-header-text">Writing</h1>
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
        <div className="writing-example-containers">
          <p className="writing-examples">
            Masked is a short story I wrote at the tail end of 2020. Writing has
            always helped me cope with stress and anxiety, and I can’t think of
            a more stressful year thus far.
            <br />
            <br />
            Short story writing example by Abbigale Dawn Gravel: &nbsp;
          </p>
          <a
            href="/writing-files/masked.pdf"
            download
            className="download-button"
          >
            DOWNLOAD PDF
          </a>
        </div>
        <div className="writing-example-containers">
          <p className="writing-examples">
            Paper Boat is a song I wrote in 2017, when I was supporting myself
            as a songwriter, singer, rhythm guitarist, and band manager/leader.
            It can be found on my debut EP, titled Abbigale Dawn. <br /> <br />
            Songwriting example by Abbigale Dawn Gravel: &nbsp;
          </p>
          <a
            href="/writing-files/paper-boats.pdf"
            download
            className="download-button"
          >
            DOWNLOAD PDF
          </a>
        </div>
        <div className="writing-example-containers">
          <p className="writing-examples">
            I love everything imaginative and creative, including the
            paranormal, so I jumped at the chance to begin writing for a
            publication titled Witchcraft Magazine. My first articles will be
            published in September, but this is the article that landed the
            position. <br /> <br />
            Poem example by Abbigale Dawn Gravel: &nbsp;
          </p>
          <a
            href="/writing-files/wither.pdf"
            download
            className="download-button"
          >
            DOWNLOAD PDF
          </a>
        </div>
      </div>
    </div>
  );
};
