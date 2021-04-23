import { MainNavHeader } from './MainNavHeader/MainNavHeader'
import { Profile } from './Profile/Profile'
import { About } from './About/About'
import { Skills } from './Skills/Skills'
import { Work } from './Work/Work'
import { Contact } from './Contact/Contact'
import { Footer } from './Footer/Footer'

import './MainPage.css'
import React from 'react'

export const MainPage = () => {
  const handleAutoScroll = position => {
    const scrollTo = document.querySelector(`.${position}`)
    const distance = (position === 'skills' || 
                      position === 'work' ||
                      position === 'contact')
                        ? 100 : -100
    window.scroll({ top: (scrollTo.offsetTop + distance), left: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <MainNavHeader handleAutoScroll={handleAutoScroll}></MainNavHeader>
      <div className='profile'><Profile></Profile></div>
      <div className='about'><About></About></div>
      <div className='skills'><Skills></Skills></div>
      <div className='work'><Work></Work></div>
      <div className='contact'><Contact></Contact></div>
      <Footer></Footer>
    </div>
  )
}