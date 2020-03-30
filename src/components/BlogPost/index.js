import React from 'react';
import { Link } from 'gatsby';
// import Button from '../Button';
import Img from 'gatsby-image';
import Styled from 'styled-components';
import Eyebrow from '../Eyebrow';
import { colors } from '../../colors';

const BlogPostItem = ({ blogPost }) => {
  return (
    <BlogPostWrapper>
      {blogPost.map(({ node }) => (
        <BlogPostInner key={node.id}>
          <BlogPost>
            <BlogFeaturedImage>
              <Img
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
            </BlogFeaturedImage>

            <BlogPostContent>
              <Eyebrow>Featured Post</Eyebrow>
              <BlogPostDate
                dangerouslySetInnerHTML={{ __html: node.frontmatter.date }}
              />

              <BlogPostTitle>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </BlogPostTitle>

              <BlogPostExcerpt
                dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
              />

              <StyledLink href={node.frontmatter.path}>
                Read full article
              </StyledLink>
            </BlogPostContent>
          </BlogPost>
        </BlogPostInner>
      ))}
    </BlogPostWrapper>
  );
};

const BlogPostWrapper = Styled.section`
  padding: 5rem 0;

  @media screen and (min-width: 768px) {
    background: ${colors.lightGray};
    padding-top: 12rem;
    padding-bottom: 5rem;
  }
`;

const BlogPostInner = Styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const BlogPost = Styled.article`
  position: relative;
`;

const BlogFeaturedImage = Styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 8rem;
  }
`;

const BlogPostContent = Styled.div`
  padding: 2rem;
  background: ${colors.white};

  span {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 6rem 3rem 3rem;
    top: -6rem;
    width: 500px;

    span {
      right: 0;
      left: inherit;
    }
  }
`;

const StyledLink = Styled.a`
  display: inline-block;
  padding: .8rem 1.4rem;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin: 1rem auto 0;
  letter-spacing: 0.2em;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    border-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  }
`;

const BlogPostTitle = Styled.h3`
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;

const BlogPostDate = Styled.div`
  display: block;
  letter-spacing: 0.15em;
  font-weight: 500;
  margin-bottom: 16px;
  line-height: 1;
  font-size: 1.4rem;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background: ${colors.black};
    display: block;
    margin: 2rem 0;
  }
`;

const BlogPostExcerpt = Styled.p`
  font-size: 1.6rem;
`;

export default BlogPostItem;
