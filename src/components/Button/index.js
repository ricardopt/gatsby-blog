import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Button = () => (
  <PrimaryButton href={'/about'}>More about me</PrimaryButton>
);

export default Button;

const PrimaryButton = Styled.a`
  display: inline-block;
  padding: 1rem 1.4rem;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  margin: 30px auto;
  letter-spacing: 0.2em;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    border-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  }
`;
