import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

const Logo = () => (
  <Heading>
    <Link to="/">
      Mario<span>Hernandez</span>
    </Link>
  </Heading>
);

const Heading = Styled.h1`
  display: block;

  a {
    text-decoration: none;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 400;
    color: $color-dark-gray;
    line-height: 1;

    @media screen and (min-width: 768px) {
      font-size: 2.2rem;
    }

    span {
      font-weight: 700;
      color: $color-black;
    }
  }
`;

export default Logo;
