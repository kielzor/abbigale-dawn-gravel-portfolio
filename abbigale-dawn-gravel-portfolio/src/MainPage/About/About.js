import './About.css'

export const About = () => {

  return (
    <div className='about-section'>
      <section className='about-top-section'>
        <div className='about-header-and-p1-container'>
          <h1 className='about-header'>About</h1>
          <p className='about-text'>
            As a UX/UI designer with a background in music 
            and writing I use a deeply empathetic approach 
            to creatively solve problems.
          </p>
        </div>
        <div className='about-headshot'>***HEADSHOT IMAGE**</div>
      </section>
      <section className='about-lower-sections'>
        <p className='about-text'>
          I enjoy the community aspect of teamwork, having 
          been a member and manager of many musical projects
          over the years.
        </p>
      </section>
      <section className='about-lower-sections'>
        <p className='about-text'>
          I love learning about the way people interact
          with technology, and inventing thoughtful solutions
          to all kinds of pain points.
        </p>
        </section>
    </div>
  )
}