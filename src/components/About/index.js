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
			<AboutWrapper>
				<AboutInner>
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
								I am a Front-End Developer and Speaker from Los Angeles where I live with my wife
								Damaris and my two kids Diego and Valentina.
							</p>

							<p>
								I conduct private and community-organized training workshops on various Front-End
								topics.
							</p>
						</AboutBio>
					</AboutContent>
				</AboutInner>
			</AboutWrapper>
		</React.Fragment>
	);
};

const AboutWrapper = Styled.section`
  max-width: 768px;
  margin: 0 auto 40px;
  padding: 30px 0 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 80px 0;
    margin: 0 auto;
  }
`;

const AboutInner = Styled.article`
  background: url(${aboutHero});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }

  &::after {
    content: 'About me';
    display: inline-block;
    position: absolute;
    top: 3px;
    right: 4px;
    background: ${colors.white};
    color: ${colors.black};
    padding: 8px 20px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 1.3rem;
    z-index: 2;
    font-weight: 600;
  }
`;

const AboutHeadshot = Styled.div`
  flex: 0 0 300px;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.4);

  img {
    display: block;
    margin: 0 auto 20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }


  ul {
    width: 100%;
  }

  a {
    color: ${colors.white};
  }
`;

const AboutContent = Styled.div`
  padding: 30px 20px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  @media screen and (min-width: 640px) {
    padding: 60px 30px 0;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 1px;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  }
`;

const AboutName = Styled.h3`
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${colors.white};
`;

const AboutTitle = Styled.span`
  text-transform: uppercase;
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.midGray};
`;

const AboutBio = Styled.div`
  color: ${colors.white};
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
  color: ${colors.white};
`;

export default About;
