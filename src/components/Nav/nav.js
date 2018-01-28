import React from "react";
import Link from "gatsby-link";

const Navigation = props => {
  return (
    <ul className="navigation__list">
      <li className="naigation__item"><Link to={`/`}>Home</Link></li>
      <li className="naigation__item"><Link to={`/blog`}>Blog</Link></li>
      <li className="naigation__item"><Link to={`/contact`}>Contact</Link></li>
    </ul>
  );
};

export default Navigation;
