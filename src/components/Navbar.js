import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Mani Pedi Spa</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
