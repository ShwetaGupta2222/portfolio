import React from 'react';
import P4 from "../img/p1.png"
import P1 from "../img/p1.jpg"
import P2 from "../img/p2.png"
import P3 from "../img/p3.png"
import Arrow from '../img/arrow.png';

const Card = ({ title, imageSrc, altText, projectType, link }) => {
  return (
    <div className="card">
      <div className="title">
        <img className="project-img " src={imageSrc} alt={altText} />
      </div>
      <div className="icon"></div>
      <div className="features">
        <ul>
          <li>
            <h2>{title}</h2>
          </li>
          <li>
            {projectType} <img src={Arrow} alt="." />
          </li>
        </ul>
        <a href={link} className="btn">
          Check it out
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Bloody Trail Web Game',
      imageSrc: P4,
      altText: 'Bloody Trail Web Game',
      projectType: 'Web Development',
      link: 'https://bloody-trail.web.app/',
    },
    {
      title: 'BabyChat Web App',
      imageSrc: P1,
      altText: 'BabyChat Web App',
      projectType: 'Web Development',
      link: 'https://shweta-chat-app-76bda.web.app/',
    },
    {
      title: 'Youtube 2.0 Web App',
      imageSrc: P2,
      altText: 'Youtube 2.0 Web App',
      projectType: 'Web Development',
      link: 'https://babychat.000webhostapp.com/',
    },
    {
      title: 'Lyrics Music App',
      imageSrc: P3,
      altText: 'Lyrics Music App',
      projectType: 'Web Development',
      link: '/#',
    },
  ];

  return (
    <div id="project">
      <h1 className="heading">My Projects</h1>
      <div className="p-container">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
