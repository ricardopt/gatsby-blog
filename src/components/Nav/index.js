import React from 'react';
import Link from 'gatsby-link';

const Navigation = (props) => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link exact to={'/'} activeClassName="active">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link strict to={'/blog/'} activeClassName="active">
          Blog
        </Link>
      </li>
      <li className="nav__item">
        <Link exact to={'/about'} activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
