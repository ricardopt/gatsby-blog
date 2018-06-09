import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Styled from 'styled-components';

import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import { colors } from '../colors';

const IndexBlog = ({ data }) => (
	<React.Fragment>
		<PageHeading>Blog</PageHeading>
		<BlogWrapper>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<BlogSection key={node.id}>
					<BlogPostItem>
						<BlogPostImage>
							<Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
						</BlogPostImage>

						<BlogPostContent>
							<BlogPostDate dangerouslySetInnerHTML={{ __html: node.frontmatter.date }} />
							<BlogPostTitle>
								<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
							</BlogPostTitle>

							<BlogPostExcerpt dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />

							<BlogPostButton href={node.frontmatter.path}>Read the full post</BlogPostButton>
						</BlogPostContent>
					</BlogPostItem>
				</BlogSection>
			))}
		</BlogWrapper>
		<Footer />
	</React.Fragment>
);

export default IndexBlog;

const BlogWrapper = Styled.section`
  padding: 0;

  @media screen and (min-width: 768px) {
    background: ${colors.lightGray};
    padding-top: 12rem;
    padding-bottom: 5rem;
  }
`;

const BlogSection = Styled.section`
  max-width: 960px;
  margin: 0 auto 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;

  @media screen and (min-width: 768px) {
    margin: 0 auto 12rem;
    padding-bottom: 8rem;

    &:last-child {
      padding-bottom: 0;
      margin-bottom: 4rem;
    }
  }

  &:last-child {
    border: 0;
    padding: 0;
  }
`;

const BlogPostItem = Styled.article`
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const PageHeading = Styled.h1`
  max-width: 960px;
  margin: 0 20px 20px;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;

  @media screen and (min-width: 1000px) {
    margin: 0 auto 2rem;
    font-size: 4rem;
  }
`;

const BlogPostImage = Styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 8rem;
  }

  // Using important to override inline styles added
  // by gatsby-image plugin.
  img {
    transition: all 0.5s ease-in-out !important;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const BlogPostContent = Styled.div`
  padding: 2rem 20px;
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

const BlogPostTitle = Styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }
`;

const BlogPostExcerpt = Styled.p`
  font-size: 1.6rem;
`;

const BlogPostButton = Styled.a`
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
