import React from 'react';
import Link from 'gatsby-link';
import Tags from '../Tags';
import Img from 'gatsby-image';

const Featured = ({ featuredPosts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {featuredPosts.map(({ node }) => (
        <div key={node.id}>
          <div className="featured-post">
            <div className="featured-post__image">
              <Img
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
            </div>

            <div className="featured-post__text">
              <h3 className="blog-post__title">
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h3>

              <div
                className="blog-post__date"
                dangerouslySetInnerHTML={{ __html: node.frontmatter.date }}
              />

              <p
                className="blog-post__excerpt"
                dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
              />

              <div className="blog-post__tags">
                <Tags list={node.frontmatter.tags || []} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
