import React from 'react';
import headshot from '../../../src/img/headshot.jpg';
// import aboutImg from '../../../src/img/hero.jpg';
import img from 'gatsby-image';
import Styled from 'styled-components';
import { colors } from '../../colors';
import SocialIcons from '../SocialIcons';
import { join } from 'path';

const About = props => {
	return (
		<React.Fragment>
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
  max-width: 768px;
  margin: 0 auto;
  padding: 30px 0 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 80px 0;
  }
`;

const AboutHeadshot = Styled.div`

  img {
    display: block;
    margin: 0 auto 20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
`;

const AboutContent = Styled.div`
  padding: 20px 30px 0;

  ul {
    width: 100%;
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
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  color: #a5a5a5;
`;

const AboutBio = Styled.div`
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
