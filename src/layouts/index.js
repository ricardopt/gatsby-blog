import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Header from '../components/Header';
import '../sass/base.scss';
import '../sass/typography.scss';
import '../sass/layout.scss';
require('prismjs/themes/prism.css');

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Mario Hernandez"
      meta={[
        {
          name: 'description',
          content: 'Mario Hernandez is a front-end developer from Los Angeles'
        },
        {
          name: 'keywords',
          content: 'web developer, front-end web developer, public speaker'
        }
      ]}
    />
    <Header />
    <section className="main-content">{children()}</section>
  </React.Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
