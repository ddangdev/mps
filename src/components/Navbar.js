import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <ul id="dropdown-services" className="dropdown-content">
        <li><Link to="/">Manicure</Link></li>
        <li><Link to="/">Pedicure</Link></li>
        <li><Link to="/">Acrylic</Link></li>
        <li><Link to="/">Waxing</Link></li>
        <li><Link to="/">Facials</Link></li>
        <li className="divider"></li>
        <li><Link to="/">Keiki</Link></li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Mani Pedi Spa</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown-services">Services<i className="fa fa-address-card material-icons right"></i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
