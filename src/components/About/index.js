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
			{/* <AboutQuote>
				Sometimes there just aren't enough rocks.
				<AboutCite>—Forrest Gump</AboutCite>
			</AboutQuote> */}
			<AboutWrapper>
				<AboutHeadshot>
					<img src={headshot} alt={`Mario Hernandez`} />
					<AboutName>Mario Hernandez</AboutName>
					<AboutTitle>Front-End Developer</AboutTitle>
				</AboutHeadshot>
				<AboutContent>
					<AboutBio>
						<p>
							I am a Front-End Developer and Speaker from Los Angeles where I live with my wife Damaris
							and my two kids Diego and Valentina.
						</p>

						<p>I conduct private and community-organized training workshops on various Front-End topics.</p>
					</AboutBio>
					<ConnectLabel>Connect with me</ConnectLabel>
					<SocialIcons />
				</AboutContent>
			</AboutWrapper>
		</React.Fragment>
	);
};

const AboutWrapper = Styled.section`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 20px 40px;
  position: relative;

  @media screen and (min-width: 808px) {
    flex-direction: row;
    margin: 20px auto 80px;
  }
`;

const AboutHeading = Styled.h3`
  width: 100%;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
  padding-bottom: 2rem;
  padding-top: 80px;
  border-top: 1px solid ${colors.midGray};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    border: 0;
  }
`;

const AboutQuote = Styled.blockquote`
  max-width: 640px;
  margin: 40px auto;
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 3rem;
  padding: 20px;
  position: relative;
  color: ${colors.darkGray};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 20px 0 20px 80px;
    border-left: 4px solid ${colors.lightGray};
    text-align: left;
  }

  &::before {
    content: '"';
    display: inline-block;
    font-size: 140px;
    position: absolute;
    left: -10px;
    top: -90px;
    color: ${colors.midGray};
    font-weight: 700;
    font-family: cursive, serif;
  }
`;

const AboutCite = Styled.cite`
  display: block;
  text-align: right;
  font-size: 14px;
  margin-right: 40px;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 2px;
`;

const AboutHeadshot = Styled.div`
  flex: 0 0 220px;

  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

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
`;

const AboutContent = Styled.div`
  padding: 30px 0;
  position: relative;

  ul {
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    padding: 0;

    ul {
      justify-content: flex-start;

      li:first-child {
        padding-left: 0;
      }
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
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export default About;
