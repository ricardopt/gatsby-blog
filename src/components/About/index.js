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
						<AboutName> Mario Hernandez </AboutName> <AboutTitle>Head of Learning at Mediacurrent </AboutTitle>
						<p>
							I am a Front-End Developer and Head of Learning living in Los Angeles.  I help large and small organizations build and deploy web systems. I work with <a href='https://mediacurrent.com' target='_blank'>Mediacurrent</a> where we work with some of the world's most popular brands.
						</p>
            <p>
							I am frequent writer and speaker at web and open source conferences; co-host of the
							Mediacurrent podcast; co-maintainer of the <a href='https://www.drupal.org/project/simplify_menu/' target='_blank'>Simplify Menu</a> module and was part of the team behind <a href='https://www.drupal.org/node/2847582/' target='_blank'>Out Of The Box</a> initiative. I provide Front-End training for clients and also conduct private and community organized training workshops.
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
    max-width: 300px;

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
  font-weight: 700;

  @media screen and (min-width: 540px) {
    text-align: left;
  }
`;

const AboutTitle = Styled.span`
  text-transform: uppercase;
  display: block;
  font-size: 1.6rem;
  letter-spacing: 0.06em;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: 540px) {
    text-align: left;
  }
`;

const AboutBio = Styled.div`

  a {
    display: inline-block;
    margin: 0 4px;
  }
`;

export default About;
