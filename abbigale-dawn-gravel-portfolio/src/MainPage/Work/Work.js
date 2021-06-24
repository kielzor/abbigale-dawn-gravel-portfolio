import { CaseStudies } from './CaseStudies/CaseStudies'
import { TechSkills } from './TechSkills/TechSkills'
import { SoftSkills } from './SoftSkills/SoftSkills'
import { WorkMainUXUI } from './WorkMainUXUI/WorkMainUXUI'
import arrow from '../../images/arrow.png'

import './Work.css'
import React from 'react'

export class Work extends React.Component {
  constructor({handleNavClick}) {
    super()
    this.handleNavClick = handleNavClick
    this.workToDisplay = 0
    this.state = { workToDisplay: 0 }
  }

  render() {
    const handleNav = direction => {
      if (direction === 3) this.workToDisplay = direction
      else this.workToDisplay += direction
      this.handleNavClick('work')
      this.setState({workToDisplay: this.workToDisplay})
    }

    const handleHeaderSwitches = () => {
      if (this.workToDisplay === 0) {
      }
      switch (this.workToDisplay) {
        case 0:
          return 'work-header-container ux-ui-header-container'
        case 1:
          return 'work-header-container tech-skills-header-container'
        case 2:
          return 'work-header-container soft-skills-header-container'        
        case 3:
          return 'work-header-container case-studies-header-container'
      }
    }

    return (
      <div>
        <div className={handleHeaderSwitches()}>
          <div className={(this.workToDisplay === 1 || this.workToDisplay === 2) ?
               'left-work-header' : 'center-work-header'
          }>
            {this.workToDisplay === 0 && <h1 className='work-header-text'>UX/UI</h1>}
            {this.workToDisplay === 1 && <h1 className='work-header-text'>User Experience</h1>}
            {this.workToDisplay === 2 && <h1 className='work-header-text'>Soft Skills</h1>}
            {this.workToDisplay === 3 && <h1 className='work-header-text'>CASE STUDIES</h1>}
          </div>
        </div>
        <div className='work-container'>
          <div className='arrow-spacing'>
            {this.workToDisplay !== 0 && 
              <img  src={arrow} 
              alt='Arrow' 
              className='arrow left-arrow'
              onClick={() => handleNav(-1)}/>
            }
          </div>
          <div className='main-work-section'>
            {this.workToDisplay === 0 && <WorkMainUXUI></WorkMainUXUI>}
            {this.workToDisplay === 1 && <TechSkills></TechSkills>}
            {this.workToDisplay === 2 && <SoftSkills></SoftSkills>}
            {this.workToDisplay === 3 && <CaseStudies></CaseStudies>}
          </div>
          <div className='arrow-spacing'>
            {this.workToDisplay !== 3 && 
              <img  src={arrow} 
              alt='Arrow' 
              className='arrow' 
              onClick={() => handleNav(1)}/>
            }
          </div>
        </div>
        {this.workToDisplay !== 3 && 
          <div className='case-studies-button-container'>
            <button className='case-studies-button' onClick={() => handleNav(3)}>
              CASE STUDIES
            </button>
          </div>
        }
        </div>
    )
  }
}
