import React from 'react';
import './Portfolio.css';
import Project from './Project';


function Portfolio() {
  const projects = [
    { 
      title: 'Christmas Assistance', 
      deployedLink: 'https://revengelmfao.github.io/christmas-assistance-application/', 
      repoLink: 'https://github.com/TanyaH-create/christmas-assistance-program', 
      imageSrc: './src/assets/images/Christmas_Assistance_Project_Resized.png',
      description: 'Interactive Front End Application'
    },
    { 
      title: 'Weather Dashboard', 
      deployedLink: 'https://weather-dashboard-challenge-gvnq.onrender.com/', 
      repoLink: 'https://github.com/TanyaH-create/weather-dashboard-challenge', 
      imageSrc: './src/assets/images/weather-dashboard.png',
      description: 'Full Stack API Demo'
    },
    { 
      title: 'Readme Generator', 
      deployedLink: 'https://drive.google.com/file/d/1ap_g0afTHNN4WEPI1nkhBGUq6-Yq-Joq/view?usp=sharing', 
      repoLink: 'https://github.com/TanyaH-create/Readme-File-Generator', 
      imageSrc: './src/assets/images/readme-generator.jpg',
      description: 'Command Line Application'
    },
    { 
      title: 'Vehicle Builder', 
      deployedLink: 'https://drive.google.com/file/d/1ap_g0afTHNN4WEPI1nkhBGUq6-Yq-Joq/view?usp=sharing', 
      repoLink: 'https://github.com/TanyaH-create/Vehicle-Builder', 
      imageSrc: './src/assets/images/Vehicle-Builder.jpg',
      description: 'Command Line Application'
    },
    { 
      title: 'Employee Manager', 
      deployedLink: 'https://drive.google.com/file/d/1A9OF5VKEh8UCRyl7rxp294oydKIAMIjz/view?usp=sharing', 
      repoLink: 'https://github.com/TanyaH-create/employee-manager', 
      imageSrc: './src/assets/images/Employee-Manager.png',
      description: 'Command Line Application'
    },
  ];
  
  return (
    <section id="portfolio" className="container-fluid">
      <h2 className="page-title">Portfolio</h2>
      
        <div className="row" >
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <Project
                title={project.title}
                deployedLink={project.deployedLink}
                repoLink={project.repoLink}
                imageSrc={project.imageSrc} 
                description={project.description}
              />
            </div>
        ))}          
        </div>
      
    </section>
  );
}

export default Portfolio;
