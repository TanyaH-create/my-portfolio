import React from 'react';
import './Project.css';

function Project({ title, deployedLink, repoLink, imageSrc, description }) {
  return (
    <div className="portfolio-item">
      <div className='project-image-container'>
        <img src={imageSrc} alt={`${title} screenshot`} className="project-image" />
      </div>

     <div className='project-info'>
        <h3> <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          {title}</a></h3>
        <p>{description}</p>
        <div className='project-links'>
          
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <img src=".\src\assets\images\github-mark.png" alt="GitHib Logo" className="logo-project" ></img>
          </a>
        </div>
     </div>
    </div>
  );
}

export default Project;