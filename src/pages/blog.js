import React from 'react'
import Link from 'gatsby-link'
import Tags from "../components/tags";

const IndexBlog = ({ data }) => (
  <div>
    <h1>My Travel Blog</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3 className="blog-post__title">
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </h3>

        <div
          className="blog-post__date"
          dangerouslySetInnerHTML={{ __html: node.frontmatter.date}}
          />

        <p
          className="blog-post__excerpt"
          dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt}}
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
    allMarkdownRemark {
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
          }
        }
      }
    }
  }
`;

export default IndexBlog
