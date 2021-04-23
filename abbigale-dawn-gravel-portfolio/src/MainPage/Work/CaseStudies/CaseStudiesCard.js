import React from 'react'

import './CaseStudies.css'

export const CaseStudiesCard = ({project, index}) => {
  return (
    <div className='project'>
      {index % 2 === 1 && <div className='project-text'>
        <p>Project: {project['project']}</p>
        <p>Timeframe: {project['timeframe']}</p>
        <p>Team: {project['team']}</p>
      </div>}
      <img  className='project-icon' 
            src={process.env.PUBLIC_URL + '/project-images/' + project['imageName'] + '.png'} 
            alt='**Project Icon**'/>
      {index % 2 === 0 && <div className='project-text'>
        <p>Project:  {project['project']}</p>
        <p>Timeframe:  {project['timeframe']}</p>
        <p>Team:  {project['team']}</p>
      </div>}
    </div>
  )
}