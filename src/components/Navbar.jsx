import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// create a list of navigation links
function Navbar() {

  //use loaction hook to determine if section is active
  const location = useLocation();

  return (
    <nav>
      <ul className="nav">
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'nav-link-active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li> <Link to='/portfolio' className={location.pathname === '/portfolio' ? 'nav-link-active' : 'nav-link'}>Portfolio</Link> </li>
        <li> <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link-active' : 'nav-link'} >Contact</Link> </li>
        <li> <Link to='resume' className={location.pathname === '/resume' ? 'nav-link-active' : 'nav-link'} >Resume</Link></li>
      </ul>
    </nav>

  );
};

export default Navbar
