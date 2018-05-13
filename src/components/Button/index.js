import React from 'react';
import Link from 'gatsby-link';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Button = () => <PrimaryButton href={'/about'}>More about me</PrimaryButton>;

export default Button;

const PrimaryButton = Styled.a`
  display: inline-block;
  padding: 8px 25px;
  background: ${colors.white};
  border: 2px solid ${colors.black};
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.4rem;
  text-align: center;
  margin: 30px auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  }
`;
