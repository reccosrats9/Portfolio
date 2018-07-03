import React from 'react'
import './Contact.css'

export default () => {
  return (
    <div className='contact' >
          <h2>Contact</h2>
          <div className='info'>
              <h3>Thanks for your interest! Links to my github, LinkedIn, and email are below. If you'd like to contact me, shoot me a message on LinkedIn or send me an email and I'll get back to you as soon as I can!</h3>
              <div className='contactIcons' >
                  <a href="https://github.com/reccosrats9"
                      target="_blank" >
                      <img src={require("./Logos/github.png")} alt="" className='smicons'/>    
                  </a>
                  <a href="https://www.linkedin.com/in/shanadair/"
                      target="_blank">
                      <img src={require("./Logos/LinkedIn.png")} alt="" className='smicons'/>
                  </a>  
                  <a href="mailto:shanadair@gmail.com">
                      <img src={require("./Logos/email.png")} alt="" className='smicons'/>
                  </a>  
              </div>
          </div>    
    </div>
  )
}
