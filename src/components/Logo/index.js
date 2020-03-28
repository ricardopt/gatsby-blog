import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Logo = () => (
  <SiteLogo href="/">
    Mario<span>Hernandez</span>
  </SiteLogo>
);

const SiteLogo = Styled.a`
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
`;

export default Logo;
