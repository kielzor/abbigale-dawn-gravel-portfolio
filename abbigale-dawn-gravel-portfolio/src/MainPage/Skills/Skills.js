import './Skills.css'

export const Skills = () => {
  return (
    <div className='skills-section'>
      <h1 className='skills-header'>Skills</h1>
      <section className='top-section'>
        <div className='ux-skills-container'>
          <h1 className='section-headers'>UX Skills</h1>
          <ul className='list-container'>
            <li>An understanding of the UX process</li>
            <li>User research</li>
            <li>User interviews</li>
            <li>Proto and user personas</li>
            <li>Affinity diagrams and empathy maps</li>
            <li>Storyboards and journey maps</li>
            <li>User flows, site flows, wireframes, and prototypes</li>
          </ul>
        </div>
        <div className='ui-skills-container'>
          <h1 className='section-headers'>UI Skills</h1>
          <ul className='list-container'>
            <li>UI analysis and patterns</li>
            <li>Color theory and typography</li>
            <li>Usability and accessibility heuristics</li>
            <li>Information architecture and sitemaps</li>
            <li>UI systems and navigation</li>
            <li>Interaction design and micro interactions</li>
            <li>Responsive design and UI prototyping</li>
            <li>UI testing and A/B testing</li>
          </ul>
        </div>
      </section>
      <section className='bottom-section'>
        <div className='soft-skills-container'>
          <h1 className='section-headers'>Soft Skills</h1>
          <ul className='list-container'>
            <li>Collaboration</li>
            <li>Leadership and team managing</li>
            <li>Writing</li>
            <li>Public speaking/presenting</li>
            <li>Diplomacy</li>
            <li>Open to feedback</li>
            <li>Eager to improve</li>
            <li>Creativity</li>
          </ul>
        </div>
        <div className='proficiencies-container'>
          <h1 className='section-headers'>Proficiencies</h1>
          <ul className='list-container'>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Miro</li>
            <li>Trello</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </section>
    </div>
  )
}