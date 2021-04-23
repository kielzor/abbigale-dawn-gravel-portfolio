import { CaseStudies } from './CaseStudies/CaseStudies'
import { Projects } from './Projects/Projects'
import { Articles } from './Articles/Articles'
import arrow from '../../images/arrow.png'

import './Work.css'
import { render } from '@testing-library/react'
import React from 'react'

export class Work extends React.Component {
  constructor() {
    super()
    this.workToDisplay = 1
    this.state = { workToDisplay: 1 }
  }

  render() {
    const caseStudies = [
      {
        project: 'Bloom',
        timeframe: '3 week design sprint',
        team: 'Rachael Chagnon, Jenny Duarte, Abbigale Gravel',
        imageName: 'logo',
      }, {
        project: 'NASA Redesign of visuals and navigation',
        timeframe: '3 week design sprint',
        team: 'Abbigale Gravel, Rocky Pitto, Kyle Donlan',
        imageName: null,
      }, {
        project: 'SOS Outreach Redesign',
        timeframe: '3 week design sprint',
        team: 'Abbigale Gravel, Rocky Pitto, Kyle Donlan',
        imageName: null,
      }
    ]
  
    const handleNav = direction => {
      this.workToDisplay += direction
      this.setState({workToDisplay: this.workToDisplay})
    }

    return (
      <div className='work-section'>
        <h1 className='work-header'>Work</h1>
        <div className='work-container'>
          <img  src={arrow} 
                alt='Arrow Image' 
                className='arrow left-arrow'
                onClick={() => handleNav(-1)}/>
          {this.workToDisplay % 3 === 1 && <CaseStudies></CaseStudies>}
          {this.workToDisplay % 3 === 2 && <Projects></Projects>}
          {this.workToDisplay % 3  === 0 && <Articles></Articles>}
          <img  src={arrow} 
                alt='Arrow Image' 
                className='arrow right-arrow' 
                onClick={() => handleNav(1)}/>
        </div>
      </div>
    )
  }
}
