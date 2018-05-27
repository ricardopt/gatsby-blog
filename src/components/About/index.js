import React from 'react';
import headshot from '../../../src/img/headshot.jpg';
import aboutHero from '../../../src/img/hero.jpg';
import img from 'gatsby-image';
import Styled from 'styled-components';
import { colors } from '../../colors';
import SocialIcons from '../SocialIcons';
import { join } from 'path';

const About = props => {
	return (
		<React.Fragment>
			<AboutHeading id="about">About Me</AboutHeading>
			<AboutWrapper>
				<AboutHeadshot>
					<img src={headshot} alt={`Mario Hernandez`} />
					<AboutName>Mario Hernandez</AboutName>
					<AboutTitle>Front-End Developer</AboutTitle>
					<ConnectLabel>Connect with me</ConnectLabel>
					<SocialIcons />
				</AboutHeadshot>
				<AboutContent>
					<AboutBio>
						<p>
							I am a Front-End Developer and Speaker from Los Angeles where I live with my wife Damaris
							and my two kids Diego and Valentina.
						</p>

						<p>I conduct private and community-organized training workshops on various Front-End topics.</p>
					</AboutBio>
				</AboutContent>
			</AboutWrapper>
		</React.Fragment>
	);
};

const AboutWrapper = Styled.section`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 20px 40px;
  position: relative;

  @media screen and (min-width: 808px) {
    flex-direction: row;
    margin: 0 auto 80px;
  }
`;

const AboutHeading = Styled.h3`
  width: 100%;
  text-align: center;
`;

const AboutHeadshot = Styled.div`
  flex: 0 0 300px;
  padding-top: 20px;

  img {
    display: block;
    margin: 0 auto 20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
    }
  }


  ul {
    width: 100%;
  }
`;

const AboutContent = Styled.div`
  padding: 30px 20px;
  position: relative;

  @media screen and (min-width: 640px) {
    padding: 60px 30px 0;
  }
`;

const AboutName = Styled.h3`
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const AboutTitle = Styled.span`
  text-transform: uppercase;
  display: block;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.midGray};
`;

const AboutBio = Styled.div`
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    fot-size: 1.6rem;
  }
`;

const ConnectLabel = Styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: center;
`;

export default About;
