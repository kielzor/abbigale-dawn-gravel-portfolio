import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-container'>
        <h1 className='contact-header'>Contact</h1>
        <h1 className='contact-text'>
          I would love to chat about design, whether 
          in an interview or over coffee!
        </h1>
        <div className='contact-info-container'>
          <p className='contact-info'>Text or Call: (720) 774-9905</p>
          <p className='contact-info'>
            Email: gravelad@gmail.com
            {/* <a href='gravelad@gmail.com'>gravelad@gmail.com</a>  */}
          </p>
        </div>
      </div>
    </div>
  )
}