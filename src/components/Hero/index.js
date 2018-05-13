import React from 'react';
import Styled from 'styled-components';
import Button from '../Button';
import SocialIcons from '../SocialIcons';
import { colors } from '../../colors';

const Hero = props => {
	return (
		<React.Fragment>
			<HeroComponent>
				<HeroHeading>I build websites</HeroHeading>
				<HeroSubheading>and speak at tech conferences</HeroSubheading>
				<SocialIcons />
				<Button />
			</HeroComponent>
		</React.Fragment>
	);
};

const HeroComponent = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  border-bottom: 1px solid ${colors.darkGray};
`;

const HeroHeading = Styled.h1`
  font-size: 7rem;
  text-align: center;
`;

const HeroSubheading = Styled.h2`
  text-align: center;
`;

export default Hero;
