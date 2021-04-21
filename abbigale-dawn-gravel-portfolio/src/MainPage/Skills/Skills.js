import './Skills.css'

export const Skills = () => {
  const uxSkills = [
    'An understanding of the UX process', 'User research', 
    'User interviews', 'Proto and user personas', 
    'Affinity diagrams and empathy maps', 'Storyboards and journey maps',
    'User flows, site flows, wireframes, and prototypes'
  ]
  const uiSkills = [
    'UI analysis and patternsv', 'Color theory and typography', 
    'Usability and accessibility heuristics', 'Information architecture and sitemaps',
    'UI systems and navigation', 'Interaction design and micro interactions', 
    'Responsive design and UI prototyping', 'UI testing and A/B testing'
  ]
  const softSkills = [
    'Collaboration', 'Leadership and team managing', 'Writing', 
    'Public speaking/presenting', 'Diplomacy', 'Open to feedback', 
    'Eager to improve', 'Creativity'
  ]
  const proficiencies = [
    'Figma', 'Adobe XD', 'Miro', 'Trello', 'HTML', 'CSS'
  ]

  return (
    <div className='skills-section'>
      <h1 className='skills-header'>Skills</h1>
      <section className='top-section'>
        <div className='skills-containers'>
          <h1 className='section-headers'>UX Skills</h1>
          <ul className='list-container'>
            {uxSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div className='skills-containers'>
          <h1 className='section-headers'>UI Skills</h1>
          <ul className='list-container'>
            {uiSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>
      <section className='bottom-section'>
        <div className='skills-containers'>
          <h1 className='section-headers'>Soft Skills</h1>
          <ul className='list-container'>
            {softSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
        <div className='skills-containers'>
          <h1 className='section-headers'>Proficiencies</h1>
          <ul className='list-container'>
            {proficiencies.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>
    </div>
  )
}