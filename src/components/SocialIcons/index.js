import React from 'react';
import Link from 'gatsby-link';

const SocialIcons = (props) => {
  return (
    <ul className="social-icons__list">
      <li>
        <Link to="https://twitter.com/imariohernandez" className="social-icon">
          <span>Twitter</span>
        </Link>
      </li>
      <li>
        <Link
          to="https://www.instagram.com/_mariorhernandez/"
          className="social-icon"
        >
          <span>Instagram</span>
        </Link>
      </li>
      <li>
        <Link to="https://github.com/mariohernandez" className="social-icon">
          <span>Github</span>
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
