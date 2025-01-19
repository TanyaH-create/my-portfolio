//Header.js
import React from 'react';
import Navbar from './Navbar';


//Header will encapsulate the navbar
//Use bootstarp to align the Name to the right and teh Navbafr to the left
function Header() {
  
  return (
    <header className='header  border-bottom'>
      <div className="container d-flex justify-content-between px-0">
        <h1 className="mb-0 flex-shrink-0">Tanya Hauck</h1>
        <Navbar />
      </div>
    </header>

  )  
}

export default Header;