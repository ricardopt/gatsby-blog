import React from 'react';
import headshot from '../../../src/img/headshot.jpg';
import '../../sass/about.scss';
import SocialIcons from '../SocialIcons';

const About = () => (
  <header role="about" className="about-wrapper">
    <div className="about__headshot">
      <img
        src={headshot}
        alt="Mario Hernandez - Front-End Developer in Los Angeles"
      />
      <h2 className="about__name">Mario Hernandez</h2>
      <h3 className="about__title">Sr. Front-End Developer</h3>
      <SocialIcons />
    </div>
    <div className="about__bio">
      <p>
        I live in Los Angeles area with my beautiful wife Damaris, My teenage
        son Diego and my little princess Valentina.
      </p>
      <p>
        I work for <a href="https://www.mediacurrent.com">Mediacurrent</a> as a
        Senior Front-End Developer. I build large scale Drupal websites and I am
        a regular speaker at different conferences in the Los Angeles, San Diego
        and San Francisco areas.
      </p>

      <p>
        I conduct private and community-driven training workshops on Drupal and
        latest front-end trends.
      </p>
    </div>
  </header>
);

export default About;
