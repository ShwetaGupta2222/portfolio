import React from 'react'
import P1 from "../img/p1.jpg"
import P2 from "../img/p2.png"
import P3 from "../img/p3.png"
import Arrow from "../img/arrow.png"
const Projects = () => {
  return (
    <div id="project">
      <h1 className='heading'>My Projects</h1>
      <div class="card">
        <div class="title"><img className="project-img" src={P1} alt="." /></div>
        <div class="icon"></div>
        <div class="features">
          <ul>
            <li><h2>BabyChat Web App</h2></li>
            <li>Web Developement<img src={Arrow} alt="." /></li>
          </ul>
        <a href="https://shweta-chat-app-76bda.web.app/" class="btn">Check it out</a>
        </div>
      </div>

      <div class="card">
        <div class="title"><img className="project-img" src={P2} alt="." /></div>
        <div class="icon"></div>
        <div class="features">
          <ul>
            <li><h2>Youtube 2.0 Web App</h2></li>
            <li>Web Developement<img src={Arrow} alt="." /></li>
          </ul>
        <a href="https://babychat.000webhostapp.com/" class="btn">Check it out</a>
        </div>
      </div>

      <div class="card">
        <div class="title"><img className="project-img" src={P3} alt="." /></div>
        <div class="icon"></div>
        <div class="features">
          <ul>
            <li><h2>Lyrics Music App</h2></li>
            <li>Web Developement<img src={Arrow} alt="." /></li>
          </ul>
        <a href="/#" class="btn">Check it out</a>
        </div>

      </div>
    </div>
  )
}

export default Projects