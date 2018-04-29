import React from 'react';
import Link from 'gatsby-link';
import '../../sass/button.scss';

const Button = () => (
  <Link to={ '/about' } className="button">More about me</Link>
);

export default Button;
