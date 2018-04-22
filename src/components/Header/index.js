import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Nav';

const Header = () => (
  <header role="header" className="site-header">
    <div className="header__brand">
      <Link className="site-name__link" to="/">
        Mario Hernandez
      </Link>
    </div>
    <nav className="main-navigation">
      <Navigation />
    </nav>
  </header>
);

export default Header;
