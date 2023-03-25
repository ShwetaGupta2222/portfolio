import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Education() {
  const {theme} = useTheme();
  return (
    <div class='education' id="education">
      <h1 className='heading'>My Education</h1>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>Harcourt Butler Technical University</p>
           <span>Btech Computer Science & Engineering</span>
         </div >
         <div className="second">
          <p>2021-24</p>
          <span>Kanpur, UP</span>
          </div>
      </div>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>Government Polytechnic Lucknow</p>
           <span>Information Technology</span>
         </div >
         <div className="second">
          <p>2018-21</p>
          <span>Lucknow, UP</span>
          </div>
      </div>
    </div>
  )
}

export default Education