import React, { useRef } from "react"

import { MainNavHeader } from './MainNavHeader/MainNavHeader'
import { Profile } from './Profile/Profile'
import { About } from './About/About'
import { Skills } from './Skills/Skills'
import { Work } from './Work/Work'

import './MainPage.css'

export const MainPage = () => {
  const profile = useRef()
  const about = useRef()
  const skills = useRef()
  const work = useRef()
  const contact = useRef()

  const handleScroll = position => {
    switch (position) {
      case 'profile':
        profile.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'about':
        about.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'skills':
        skills.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'work':
        work.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contact.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        console.error('Error occurred when trying to scroll')
    }
  }

  return (
    <div>
      <MainNavHeader handleScroll={handleScroll}></MainNavHeader>
      <div ref={profile}><Profile></Profile></div>
      <div ref={about}><About></About></div>
      <div ref={skills}><Skills></Skills></div>
      <div ref={work}><Work></Work></div>
      <div ref={contact} className='contact-section'></div>
    </div>
  )
}