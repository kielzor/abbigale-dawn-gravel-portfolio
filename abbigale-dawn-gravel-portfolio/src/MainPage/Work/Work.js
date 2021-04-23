import { CaseStudies } from './CaseStudies/CaseStudies'
import { Projects } from './Projects/Projects'
import { Articles } from './Articles/Articles'
import arrow from '../../images/arrow.png'

import './Work.css'
import React from 'react'

export class Work extends React.Component {
  constructor() {
    super()
    this.workToDisplay = 1
    this.state = { workToDisplay: 1 }
  }

  render() {
    const handleNav = direction => {
      this.workToDisplay += direction
      this.setState({workToDisplay: this.workToDisplay})
    }

    return (
      <div className='work-section'>
        <h1 className='work-header'>Work</h1>
        <div className='work-container'>
          <img  src={arrow} 
                alt='Arrow' 
                className='arrow left-arrow'
                onClick={() => handleNav(-1)}/>
          {this.workToDisplay % 3 === 1 && <CaseStudies></CaseStudies>}
          {this.workToDisplay % 3 === 2 && <Projects></Projects>}
          {this.workToDisplay % 3 === 0 && <Articles></Articles>}
          <img  src={arrow} 
                alt='Arrow' 
                className='arrow' 
                onClick={() => handleNav(1)}/>
        </div>
      </div>
    )
  }
}
