import logo from '../../images/logo.png'

import './MainNavHeader.css'

export const MainNavHeader = ({ handleScroll }) => {

  return (
    <div className='main-nav-header-container'>
      <div className='main-nav-primary-container'>
        <img src={logo} alt='Abbigale Dawn Personal Logo'
            className='main-nav-header-logo'
            onClick={() => handleScroll('home')}
            />
        <h2 className='main-nav-header-text'
            onClick={() => handleScroll('about')}
            >About</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleScroll('work')}
            >Work</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleScroll('skills')}
            >Skills</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleScroll('resume')}
            >Resumé</h2>
      </div>
      <div className='main-nav-contact-container'>
        <h2 className='main-nav-contact-text'
            onClick={() => handleScroll('contact')}
            >Contact</h2>
        </div>
    </div>
  )
}
