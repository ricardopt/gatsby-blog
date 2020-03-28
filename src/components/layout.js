import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// import Helmet from './Headermet';
// import Header from '../Header';
import '../sass/base.scss';
import '../sass/base.scss';
import '../sass/typography.scss';
import '../sass/layout.scss';

// Adds prism theme
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <section className="main-content">{children}</section>
      </>
    )}
  />
);
