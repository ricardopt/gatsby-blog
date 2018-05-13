import React from 'react';
import Link from 'gatsby-link';
import Styled from 'styled-components';
import Button from '../Button';
import SocialIcons from '../SocialIcons';

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
`;

const HeroHeading = Styled.h1`
  font-size: 7rem;
  text-align: center;
`;

const HeroSubheading = Styled.h2`
  text-align: center;
`;

export default Hero;
