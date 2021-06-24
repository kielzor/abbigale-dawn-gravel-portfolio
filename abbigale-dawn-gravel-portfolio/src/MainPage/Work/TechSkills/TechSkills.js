import './TechSkills.css'

export const TechSkills = () => {
  const uxSkills = [
    'User Research (User Interviews, A/B and Geurilla Testing)', 
    'Proto and User Personas', 
    'Analyzing and Synthesizing Data (Affinity Diagrams, Empathy Maps, Storyboards and Journey Maps)'
  ]
  const uiSkills = [
    'Wireframes, and Prototypes', 'UI Analysis and patterns', 
    'Color theory and typography', 'Usability and accessibility heuristics',
    'Information Architecture and sitemaps', 'UI Systems and navigation',
    'Interaction design and micro interactions',
    'Responsive design and UI prototyping', 'UI testing and A/B testing'
  ]

  return (
    <div className='tech-skills-section'>
      <div className='tech-skills-containers'>
        <h2 className='tech-skills-subheader'>
          I am familiar with every phase of the UX design process, 
          including the following and more:
        </h2>
        <ul className='tech-skills-list-container'>
          {uxSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div className='tech-skills-containers'>
        <h1 className='tech-skills-section-headers'>User Interface</h1>
        <h2 className='tech-skills-subheader'>
          I use many tools and resources to create delightful and efficient 
          User Interfaces, including the following:
        </h2>
        <ul className='tech-skills-list-container'>
          {uiSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}