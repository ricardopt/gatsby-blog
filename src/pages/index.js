import React from 'react'
import Link from 'gatsby-link'
import Tags from "../components/tags";

const IndexPage = ({ data }) => (
  <div>
    <h1>My Travel Blog</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </h3>
        <span>{node.frontmatter.date}</span>
          <p>{node.frontmatter.excerpt}</p>
          <Tags list={node.frontmatter.tags || []} />
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
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

export default IndexPage
