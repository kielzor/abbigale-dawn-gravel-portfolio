import './MainNavHeader.css'

import logo from '../../images/logo.png'

export const MainNavHeader = ({ handleAutoScroll }) => {
  const handleResumeDownload = () => {
    console.log('resume download')
  }

  return (
    <div className='main-nav-header-container'>
      <div className='main-nav-primary-container'>
        <img src={logo} alt='Abbigale Dawn Personal Logo'
            className='main-nav-header-logo'
            onClick={() => handleAutoScroll('profile')}
            />
        <h2 className='main-nav-header-text'
            onClick={() => handleAutoScroll('about')}
            >About</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleAutoScroll('skills')}
            >Skills</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleAutoScroll('work')}
            >Work</h2>
        <h2 className='main-nav-header-text'
            onClick={() => handleAutoScroll('contact')}
            >Contact</h2>
      </div>
      <h2 className='main-nav-resume-text'
          onClick={handleResumeDownload}
          >Download Resumé</h2>
    </div>
  )
}
