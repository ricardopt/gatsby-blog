import React from 'react';
import Link from 'gatsby-link';
import Styled from 'styled-components';
// import '../../sass/hero.scss';

const Hero = props => {
	return (
		<React.Fragment>
			<HeroComponent>
				<HeroHeading>I build websites</HeroHeading>
				<HeroSubheading>and speak at tech conferences</HeroSubheading>
			</HeroComponent>
		</React.Fragment>
	);
};

const HeroComponent = Styled.section``;

const HeroHeading = Styled.h1``;

const HeroSubheading = Styled.h2``;

export default Hero;
