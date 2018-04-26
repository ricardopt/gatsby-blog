import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Nav';
import '../../sass/header.scss';
import '../../sass/nav.scss';

const Header = () => (
  <header role="header" className="site-header">
    <div className="header__brand">
      <Link className="site-name__link" to="/">
        Mario<span>Hernandez</span>
      </Link>
    </div>
    <nav className="nav">
      <Navigation />
    </nav>
  </header>
);

export default Header;
