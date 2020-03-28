import Styled from 'styled-components';
import { colors } from '../../colors';

const Eyebrow = Styled.span`
  display: inline-block;
  padding: 8px 20px;
  background: ${colors.black};
  color: ${colors.white};
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0;
  letter-spacing: 0.2em;
  font-weight: 500;
  line-height: 1;
`;

export default Eyebrow;
