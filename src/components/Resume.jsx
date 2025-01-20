import React from 'react'
import resume from '../assets/resume/Tanya_Hauck_Resume.pdf'

function Resume() {
  return (
    <div>
      <h2 className="page-title">Resume</h2>
      <br/>
      <h2 className="page-title">Download my <a href={resume} download="Tanya_Hauck_Resume.pdf" className="resume-link">resume</a></h2>
      <h3 className="secondary-title">Front-end Proficiencies </h3>
      <ul className="list-text">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <br/>
      <h3 className="secondary-title" >Back-end Proficiencies</h3>
      <ul className="list-text">
         <li>APIs</li>
         <li>Node</li>
         <li>Express</li>
         <li>MySQL</li>
         <li>REST</li>
      </ul>
    
    
    </div>
  )
}

export default Resume
