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
				<AboutHeading id="about"> About Me </AboutHeading>
				<AboutContent>
					<AboutHeadshot>
						<img src={headshot} alt={`Mario Hernandez`} />
						<SocialIcons />
					</AboutHeadshot>
					<AboutBio>
						<AboutName> Mario Hernandez </AboutName>
						<AboutTitle> Front - End Developer </AboutTitle>
						<p>
							I am a Front - End Developer and Speaker from Los Angeles where I live with my wife Damaris
							and my two kids Diego and Valentina.
						</p>
						<p>
							I conduct private and community - organized training workshops on various Front - End
							topics.
						</p>
					</AboutBio>
				</AboutContent>
			</AboutWrapper>
		</React.Fragment>
	);
};

const AboutWrapper = Styled.section`
  max-width: 768px;
  margin: 0 20px;

  @media screen and (min-width: 808px) {
    margin: 20px auto 80px;
  }
`;

const AboutHeadshot = Styled.div`
  img {
    display: block;
    margin: 0 auto 20px;
    max-width: 200px;

    @media screen and (min-width: 540px) {
      margin-right: 30px;
    }
  }
`;

const AboutContent = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  margin: 30px 0;
  position: relative;

  ul {
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 540px) {
    padding: 0;
    margin: 40px auto;
    flex-direction: row;

    ul {
      li:first-child {
        padding-left: 0;
      }
    }
  }
`;

const AboutHeading = Styled.h3`
  width: 100%;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2.5px;
  padding-top: 80px;
  border-top: 1px solid ${colors.midGray};
  text-align: center;

  @media screen and (min-width: 540px) {
    padding-top: 0;
    border: 0;
    text-align: left;
  }
`;

const AboutName = Styled.h3`
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: center;

  @media screen and (min-width: 540px) {
    text-align: left;
  }
`;

const AboutTitle = Styled.span`
  text-transform: uppercase;
  display: block;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: 540px) {
    text-align: left;
  }
`;

const AboutBio = Styled.div``;

export default About;
