import React from 'react';
import Styled from 'styled-components';
import SocialIcons from '../SocialIcons';
import { colors } from '../../colors';

const Footer = props => {
	return (
		<React.Fragment>
			<FooterComponent>
				<FooterInner>
					<FooterBrand>
						&copy; 2019 - <span>Mario Hernandez</span>
					</FooterBrand>
					<SocialIcons />
				</FooterInner>
			</FooterComponent>
		</React.Fragment>
	);
};

const FooterComponent = Styled.section`
  background: ${colors.black};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const FooterInner = Styled.div`
  max-width: 960px;
  margin: 0 auto;

  a {
    color: ${colors.white};
  }
`;

const FooterBrand = Styled.p`
  display: block;
  color: ${colors.white};
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0 20px;
  letter-spacing: 0.2em;
  font-weight: 500;
  line-height: 1;
`;

export default Footer;
