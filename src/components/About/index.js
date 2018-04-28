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
        Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor
        fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis
      dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor
      fringilla. Sed posuere consectetur est at lobortis. Cras mattis
      consectetur purus sit amet fermentum. Vestibulum id ligula porta felis
      euismod semper. Maecenas faucibus mollis interdum.
    </div>
  </header>
);

export default About;
