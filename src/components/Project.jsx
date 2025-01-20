import React from 'react';
import './Project.css';

function Project({ title, deployedLink, repoLink, imageSrc, description }) {
  return (
    <div className="portfolio-item">
      {/*Project card contains an image section and an info section */}
      {/*Image section */}
      <div className='project-image-container'>
        {/*Wrap image with the link to deployed site or walkthrough video */}
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} alt={`${title} screenshot`} className="project-image" />
        </a>
      </div>

     {/*Title */}
     <div className='project-info'>
        <h3 > {title} </h3>

        {/*Description and logo */}
        <div className="project-info-description">
           <p>{description}</p>
           <a href={repoLink} target="_blank" rel="noopener noreferrer">
             <img src=".\src\assets\images\github-mark.png" alt="GitHib Logo" className="logo-project" />
           </a>
        </div>
      </div>
    </div>
  );
}

export default Project;