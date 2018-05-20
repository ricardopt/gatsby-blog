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
  margin-top: 5rem;

  @media screen and (min-width: 768px) {
    margin-top: 8rem;
  }
`;

const HeroHeading = Styled.h1`
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 7rem;
  }
`;

const HeroSubheading = Styled.h2`
  text-align: center;
  font-size: 2.5rem;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export default Hero;
