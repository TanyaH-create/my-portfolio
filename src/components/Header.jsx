//Header.js
import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

//Header will encapsulate the navbar
//Use bootstarp to align the Name to the right and teh Navbafr to the left
function Header() {
  
  return (
    <header className='d-flex justify-content-between my-4'>
        <h1>Tanya Hauck</h1>
         <Navbar className='ms-auto'/>
    </header>

  )  
}

export default Header;