// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <div className="profile-img">
        <img src="/assets/img/my-profile-img.jpg" alt="Profile" className="img-fluid rounded-circle" />
      </div>
      <Link to="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Alex Smith</h1>
      </Link>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio-details">Portfolio Details</Link></li>
          <li><Link to="/service-details">Service Details</Link></li>
          <li><Link to="/starter-page">Starter Page</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
