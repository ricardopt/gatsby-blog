import React from 'react';
import Link from 'gatsby-link';
import '../../sass/hero.scss';

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="hero">
        <h1>I build websites</h1>
        <h2>and speak at tech conferences</h2>
      </div>
    </React.Fragment>
  );
};

export default Hero;
