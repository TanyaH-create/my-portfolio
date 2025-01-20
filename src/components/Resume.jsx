import React from 'react'
import resume from '../assets/resume/Tanya_Hauck_Resume.pdf'

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <br/>
      <h2>Download my <a href={resume} download="Tanya_Hauck_Resume.pdf">resume</a></h2>
      <h3> Front-end Proficiencies </h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <br/>
      <h3>Back-end Proficiencies</h3>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MySQL</li>
      <li>REST</li>
    
    </div>
  )
}

export default Resume
