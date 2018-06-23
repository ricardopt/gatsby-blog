import React from 'react';
import Styled from 'styled-components';
import SocialIcons from '../SocialIcons';
import { colors } from '../../colors';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = props => {
	return (
		<React.Fragment>
			<HeroComponent>
				<HeroHeading> I Build Websites </HeroHeading>
				<HeroSubheading> and speak at tech conferences </HeroSubheading> <SocialIcons />
				<AboutButton>
					<AnchorLink href="#about"> More about me </AnchorLink>
				</AboutButton>
			</HeroComponent>
		</React.Fragment>
	);
};

const HeroComponent = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    margin-top: 8rem;
    margin-bottom: 6rem;
  }
`;

const HeroHeading = Styled.h1`
  font-size: 6rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 10rem;
  }
`;

const HeroSubheading = Styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const AboutButton = Styled.div`
  a {
    display: inline-block;
    padding: 0.8rem 1.4rem;
    border: 2px solid ${colors.black};
    color: ${colors.black};
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 1.2rem;
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
  }
`;
export default Hero;
