import logo from '../../images/logo.png'

import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-info-section'>
        <div className='footer-info-container'>
          <img className='footer-logo' src={logo} alt='logo'/>
          <div className='footer-link-container'>
            <a  href='https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P' 
                target='_blank'
                rel="noreferrer"
                className='footer-links'>
                  Music
            </a>
            <a  href='https://www.linkedin.com/in/abbigale-gravel-3287711b8/' 
                target='_blank'
                rel="noreferrer"
                className='footer-links'>
                  LinkedIn
            </a>
          </div>
        </div>
      </div>
      <h3 className='copyright-text'>Copyright 2021</h3>
    </div>
  )
}