import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const {theme} = useTheme();
  return (
    <div className={`contact ${theme?"cool3":"warm"}`} id="contact">
        <div className="first">
        <h2>Available for select opportunities</h2>
        <p>Have an exciting project you need help with?
        Send me an email or contact me via instant message!</p>
        </div>
        <div className='second'>
            <a href="mailto:shwetagupta222222@gmail.com"><span>shwetagupta222222@gmail.com</span></a>
            <a href="https://www.linkedin.com/in/shweta-gupta-4955221b4/"><p>LinkedIn</p></a>
            <a href="https://github.com/ShwetaGupta2222"><p>Github</p></a>
            <a href="https://twitter.com/HbtuGupta"><p>Twitter</p></a>
            <a href="#"><p>Instagram</p></a>
        </div>
    </div>
  )
}

export default Contact