import React from 'react';
import Link from 'gatsby-link';
import Tags from '../components/Tags';
import Img from 'gatsby-image';
import Styled from 'styled-components';

const IndexBlog = ({ data }) => (
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

export default IndexBlog;

const BlogSection = Styled.section`
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
`;

const Heading = Styled.h1`
color: red;
`;

const Title = Styled.h2`
color: red;
`;

const Date = Styled.div`
color: red;
`;

const Excerpt = Styled.p``;

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
