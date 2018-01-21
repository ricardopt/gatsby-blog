import React from 'react'
import Link from 'gatsby-link'
import Tags from "../components/tags";

const IndexPage = ({ data }) => (
  <div>
    <h1>My Travel Blog</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title}
          <span>— {node.frontmatter.tags.join(`, `)}</span>
        </h3>
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
          }
        }
      }
    }
  }
`;

export default IndexPage
