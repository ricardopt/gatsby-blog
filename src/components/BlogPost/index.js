import React from 'react';
import Link from 'gatsby-link';
import Tags from '../Tags';
import Img from 'gatsby-image';
import Styled from 'styled-components';

const BlogPost = ({ data }) => (
	<div>
		<Heading>Blog</Heading>
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<BlogSection key={node.id}>
				<Title>
					<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
				</Title>

				<Date className="blog-post__date" dangerouslySetInnerHTML={{ __html: node.frontmatter.date }} />

				<Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />

				<Excerpt dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />

				<Tags list={node.frontmatter.tags || []} />
			</BlogSection>
		))}
	</div>
);

const Heading = Styled.h1``;

export default BlogPost;

export const query = graphql`
	query BlogPostQuery {
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
