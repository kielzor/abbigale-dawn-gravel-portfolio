import { MainNavHeader } from './MainNavHeader/MainNavHeader'
import { Profile } from './Profile/Profile'
import { About } from './About/About'

import './MainPage.css'

export const MainPage = () => {
  const handleScroll = position => {
    console.log(position)
  }

  return (
    <div>
      <MainNavHeader handleScroll={handleScroll}></MainNavHeader>
      <Profile></Profile>
      <About></About>
      <div className='skills-section'></div>
      <div className='case-studies-section'></div>
      <div className='contact-section'></div>
    </div>
  )
}