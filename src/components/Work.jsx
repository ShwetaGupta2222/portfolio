import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Work = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div class='education1' id="education">
      <h1 className='heading'>My Experience</h1>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <a href="https://www.linkedin.com/company/loopaixyz/"><p>Loop AI - Delivery Intelligence Platform <span><i>( SDE Intern)</i></span></p></a>
           <span>Developed user interface for Loop application using ReactJS, Node.js, Material UI, and API handling, ensuring a
seamless and visually appealing user experience..</span>
         </div >
         <div className="second">
          <p>2023-present</p>
          <span>Remote</span>
          </div>
      </div>
      <div className={`box ${theme?"cool":"warm"}`}>
         <div className='first'>
           <p>D2C Igniter ( Unstop )<a href="https://drive.google.com/file/d/1qFOV_HuLVSWyaTVJUYc44Eq2XDaBgOlZ/view"><span><i> Certificate</i></span></a></p>
           <span>As D2C Igniter, I organize coding and gaming events as part of a community program that promotes competitiveness,
learning, and growth. Our goal is to create a self-sufficient community on campus that showcases the skills of students.</span>
         </div >
         <div className="second">
          <p>2021-22</p>
          <span>Remote</span>
          </div>
      </div>
    </div>
  )
}

export default Work