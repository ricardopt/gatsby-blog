import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from "gatsby-link";
import Tags from "../components/tags";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Mario Hernandez - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>
          {post.frontmatter.title}
        </h1>
        <span>{post.frontmatter.date}</span>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
         <div className="blog-tag">
          <Tags list={post.frontmatter.tags || []} />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        excerpt
      }
    }
  }
`
;
