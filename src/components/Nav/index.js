import React from 'react';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink exact to={'/'} activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink strict to={'/blog/'} activeClassName="active">
          Blog
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink exact to={'/about'} activeClassName="active">
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
