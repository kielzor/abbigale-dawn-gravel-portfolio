import { CaseStudiesCard } from './CaseStudiesCard'

import './CaseStudiesCard.css'

export const CaseStudies = () => {
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

  return (
    <div className='case-studies-section'>
      <h1>Case Studies</h1>
      {caseStudies.map((project, index) => <CaseStudiesCard key={project['project']} project={project} index={index}></CaseStudiesCard>)}
    </div>
  )
}