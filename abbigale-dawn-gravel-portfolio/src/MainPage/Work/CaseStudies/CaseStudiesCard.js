import React from 'react'

import './CaseStudies.css'

export const CaseStudiesCard = ({ project }) => {
  return (
    <div className='project'>
      {/* <img  className='project-icon' 
            src={process.env.PUBLIC_URL + '/project-images/' + project['imageName'] + '.png'} 
            alt='**Project Icon**'/> */}
      <div className='project-text'>
        <p>Project:  {project['project']}</p>
        <p>Timeframe:  {project['timeframe']}</p>
        <p>Team:  {project['team']}</p>
      </div>
    </div>
  )
}