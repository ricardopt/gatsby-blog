import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';
import Tags from '../components/Tags';
import Styled from 'styled-components';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	return (
		<BlogSection>
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

				<BlogPostBody
					dangerouslySetInnerHTML={{
						__html: post.html
					}}
				/>

				<BlogPostTags>
					<Tags list={post.frontmatter.tags || []} />
				</BlogPostTags>
			</BlogPost>
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

const BlogSection = Styled.section`
  max-width: 960px;
  margin: 0 auto 4rem;
`;

const BlogPost = Styled.article`
`;

const BlogPostTitle = Styled.h1``;

const BlogPostDate = Styled.p``;

const BlogPostBody = Styled.div``;

const BlogPostTags = Styled.div``;
