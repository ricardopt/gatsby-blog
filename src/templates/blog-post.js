import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';
import Img from 'gatsby-image';
import Tags from '../components/Tags';
import Styled from 'styled-components';
import Footer from '../components/Footer';
import { colors } from '../colors';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	return (
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
					<BlogPostImage>
						<Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
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
				{/* <a href="
          https://twitter.com/intent/tweet?url=http%3A%2F%2Fmariohernandez.io&via=imariohernandez&text=Testing%20">
					Share this
				</a> */}
			</BlogInner>
			<Footer />
		</BlogSection>
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
				draft
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
  font-size: 3rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 4rem;
  }
`;

const BlogPostImage = Styled.div``;

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
