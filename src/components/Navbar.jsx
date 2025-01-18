import React from 'react'
import { Link } from 'react-router-dom'

// create a list of navigation links
function Navbar() {
  return (
    <nav className='container'>
      <ul className='list-group list-group-horizontal'>
        <li className='list-group-item'> <Link to='/about'>About</Link> </li>
        <li className='list-group-item' > <Link to='/portfolio'>Portfolio</Link> </li>
        <li className='list-group-item'> <Link to='/contact'>Contact</Link> </li>
        <li className='list-group-item'> <Link to='resume'>Resume</Link></li>
      </ul>
    </nav>

  );
};

export default Navbar
