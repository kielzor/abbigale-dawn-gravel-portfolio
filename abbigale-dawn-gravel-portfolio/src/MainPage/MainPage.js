import { MainNavHeader } from './MainNavHeader/MainNavHeader'
import { Profile } from './Profile/Profile'
import { About } from './About/About'
import { Skills } from './Skills/Skills'
import { Work } from './Work/Work'
import { Contact } from './Contact/Contact'

import './MainPage.css'

export const MainPage = () => {

  const handleScroll = position => {
    const scrollTo = document.querySelector(`.${position}`)
    const distance = (position === 'skills' || position === 'work') ? 100 : -100
    window.scroll({ top: (scrollTo.offsetTop + distance), left: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <MainNavHeader handleScroll={handleScroll}></MainNavHeader>
      <div className='profile'><Profile></Profile></div>
      <div className='about'><About></About></div>
      <div className='skills'><Skills></Skills></div>
      <div className='work'><Work></Work></div>
      <div className='contact'><Contact></Contact></div>
    </div>
  )
}