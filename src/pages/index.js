import React from 'react';
import Hero from '../components/Hero';
import SocialIcons from '../components/SocialIcons';
import Featured from '../components/Featured';

const Home = ({ data }) => (
  <React.Fragment>
    <Hero />
    <SocialIcons />
    <Featured featuredPosts={data.allMarkdownRemark.edges} />
  </React.Fragment>
);

export default Home;

export const query = graphql`
  query IndexFeaturedQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, featured: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            path
            excerpt
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
