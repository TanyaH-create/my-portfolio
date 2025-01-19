import React from 'react'
import { Link } from 'react-router-dom'

// create a list of navigation links
function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li> <Link className="nav-link"  to='/portfolio'>Portfolio</Link> </li>
        <li> <Link className="nav-link"  to='/contact'>Contact</Link> </li>
        <li> <Link className="nav-link" to='resume'>Resume</Link></li>
      </ul>
    </nav>

  );
};

export default Navbar
