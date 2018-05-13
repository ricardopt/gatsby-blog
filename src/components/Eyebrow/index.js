import React from 'react';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Eyebrow = Styled.span`
  display: inline-block;
  padding: 5px 20px;
  background: ${colors.black};
  color: ${colors.white};
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0;
`;

export default Eyebrow;
