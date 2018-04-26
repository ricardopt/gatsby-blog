import React from 'react';
import Link from 'gatsby-link';

const Navigation = (props) => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link to={`/`}>Home</Link>
      </li>
      <li className="nav__item">
        <Link to={`/blog`}>Blog</Link>
      </li>
    </ul>
  );
};

export default Navigation;
