import React from 'react';
import Link from 'gatsby-link';
import Tags from '../components/Tags';
import Img from 'gatsby-image';
import '../sass/blog.scss';

const IndexBlog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h2 className="blog-post__title">
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </h2>

        <div
          className="blog-post__date"
          dangerouslySetInnerHTML={{ __html: node.frontmatter.date }}
        />

        <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />

        <p
          className="blog-post__excerpt"
          dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
        />

        <div className="blog-post__tags">
          <Tags list={node.frontmatter.tags || []} />
        </div>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexBlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
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

export default IndexBlog;
