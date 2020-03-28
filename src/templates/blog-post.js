import React from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Tags from '../components/Tags';
import Styled from 'styled-components';
import Footer from '../components/Footer';
import { colors } from '../colors';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogSection>
        <BlogInner>
          <Helmet title={`Mario Hernandez - ${post.frontmatter.title}`} />
          <BlogPost>
            <BlogPostTitle
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.title
              }}
            />
            <BlogPostDate
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.date
              }}
            />

            <Share>
              <ShareLabel>Share this post</ShareLabel>
              <ShareSocial>
                <ShareItem>
                  <ShareLink
                    href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://mariohernandez.io${post.frontmatter.path}%2F&via=imariohernandez`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </span>
                    <LinkLabel>Share on Twitter</LinkLabel>
                  </ShareLink>
                </ShareItem>
                <ShareItem>
                  <ShareLink
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://mariohernandez.io${post.frontmatter.path}`}
                    target="_blank"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </span>
                    <LinkLabel>Share on Facebook</LinkLabel>
                  </ShareLink>
                </ShareItem>
                <ShareItem>
                  <ShareLink
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://mariohernandez.io${post.frontmatter.path}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}
                    target="_blank"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </span>
                    <LinkLabel>Share on LinkedIn</LinkLabel>
                  </ShareLink>
                </ShareItem>
              </ShareSocial>
            </Share>

            <BlogPostImage>
              <Img
                sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
              />
            </BlogPostImage>
            <BlogPostBody
              dangerouslySetInnerHTML={{
                __html: post.html
              }}
            />
            <BlogPostTags>
              <Tags list={post.frontmatter.tags || []} />
            </BlogPostTags>
          </BlogPost>
        </BlogInner>
        <Footer />
      </BlogSection>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        tags
        draft
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Share = Styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ShareLabel = Styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 2px 0 0;
`;

const ShareSocial = Styled.ul`
  align-items: center;
  display: flex;
  flex-direction: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

const ShareItem = Styled.li`
  margin: 0 10px;
`;

const ShareLink = Styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.black};
  transition: border 0.3s ease-in-out;

  > span {
    height: 20px;
  }

  .icon {
    width: 20px;
    height: 20px;
    stroke: ${colors.black};
    fill: ${colors.black};
    transition: transform 0.2s ease-in-out;
  }

  &:hover,
  &:focus {
    border-color ${colors.darkerGray};

    .icon {
      transform: scale(1.2);
      stroke: ${colors.black};
      fill: ${colors.black};
    }
  }

`;
const LinkLabel = Styled.span`
// Hides elements from view but are still available
// to screen readers for accessbility purposes.
// sass-lint:disable no-important
  position: fixed !important;
  // keep it on viewport
  top: 0 !important;
  left: 0 !important;
  // give it non-zero size, VoiceOver on Safari requires at least 2 pixels
     before allowing buttons to be activated.
  width: 4px !important;
  height: 4px !important;
  // visually hide it with overflow and opacity
  opacity: 0 !important;
  overflow: hidden !important;
  // remove any margin or padding
  border: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  // ensure no other style sets display to none
  display: block !important;
  visibility: visible !important;

  &.focusable:focus,
  &.focusable:active {
    position: static !important;
    width: auto !important;
    height: auto !important;
    opacity: 1 !important;
  }
`;
const BlogSection = Styled.div``;

const BlogInner = Styled.section`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const BlogPost = Styled.article`
`;

const BlogPostTitle = Styled.h1`
  width: calc(100% - 40px);
  margin: 0 auto 2rem;
  font-size: 5rem;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 8rem;
  }
`;

const BlogPostImage = Styled.div`
  // Using important to override inline styles added
  // by gatsby-image plugin.
  img {
    transition: all 0.5s ease-in-out !important;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const BlogPostDate = Styled.p`
  display: block;
  letter-spacing: 0.15em;
  font-weight: 500;
  margin: 0 20px 2rem;
  line-height: 1;
  font-size: 1.4rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin: 0 auto 2rem;
  }

  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background: ${colors.black};
    display: block;
    margin: 2rem 0;
  }
`;

const BlogPostBody = Styled.div`
  padding: 2rem 20px 0;

  // This table cell dimensions are for post
  // about building a card component.
  tbody tr td:first-child {
    width: 160px;
  }

  tbody tr td:nth-child(2) {
    width: 215px;
  }
`;

const BlogPostTags = Styled.div`
  border-top: 1px solid ${colors.midGray};
  max-width: 960px;
  margin: 3rem 20px 4rem;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
