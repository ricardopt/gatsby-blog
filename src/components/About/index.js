import React from 'react';
import headshot from '../../../src/img/headshot.jpg';
import aboutHero from '../../../src/img/hero.jpg';
import img from 'gatsby-image';
import Styled from 'styled-components';
import { colors } from '../../colors';
import SocialIcons from '../SocialIcons';
import Link from '../Link';

const About = props => {
	return (
		<React.Fragment>
			<AboutWrapper>
				<AboutHeading id="about"> About Me </AboutHeading>
				<AboutContent>
					<AboutHeadshot>
						<img src={headshot} alt={`Mario Hernandez`} /> <SocialIcons />
					</AboutHeadshot>
					<AboutBio>
						<AboutName> Mario Hernandez </AboutName> <AboutTitle> Front - End Developer </AboutTitle>
						<p>
							I help large and small organizations build and deploy their web systems.As a Front - End
							Developer at
							<Link to="https://mediacurrent.com" target="_blank">
								Mediacurrent,
							</Link>
							I work with clients including NFL, WWE, VisitTheUSA, Olympus, Higher Ed, Government, and
							more.
						</p>
						<p>
							I am frequent writer and speaker at web and open source conferences; co - host of the
							Mediacurrent podcast; contributor of the
							<Link to="https://www.drupal.org/project/simplify_menu" target="_blank">
								simplify menu
							</Link>
							module and the
							<Link to="https://www.drupal.org/node/2847582" target="_blank">
								Out Of The Box
							</Link>
							initiative.I conduct private and community organized training workshops on all things
							Drupal, Component Development and other front - end topics.
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
  font-size: 3rem;
  text-align: center;
  font-weight: 500;

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

const AboutBio = Styled.div`

  @media screen and (min-width: 640px) {
    p {
      font-size: 1.5rem;
    }
  }

  a {
    display: inline-block;
    margin: 0 4px;
  }
`;

export default About;
