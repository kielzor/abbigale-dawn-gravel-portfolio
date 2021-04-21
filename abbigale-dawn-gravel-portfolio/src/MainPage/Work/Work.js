import { ProjectCard } from './ProjectCard'

import './Work.css'

export const Work = () => {
  const projects = [
    {
      project: 'Bloom',
      timeframe: '3 week design sprint',
      team: 'Rachael Chagnon, Jenny Duarte, Abbigale Gravel',
      url: null,
    }, {
      project: 'NASA Redesign of visuals and navigation',
      timeframe: '3 week design sprint',
      team: 'Abbigale Gravel, Rocky Pitto, Kyle Donlan',
      url: null,
    }, {
      project: 'SOS Outreach Redesign',
      timeframe: '3 week design sprint',
      team: 'Abbigale Gravel, Rocky Pitto, Kyle Donlan',
      url: null,
    }
  ]

  return (
    <div className='work-section'>
      <h1 className='work-header'>Case Studies</h1>
      {projects.map((project, index) => <ProjectCard key={project['project']} project={project} index={index}></ProjectCard>)}
    </div>
  )
}