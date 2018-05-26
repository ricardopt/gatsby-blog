import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = ({ data }) => (
	<React.Fragment>
		<Hero />
		<Featured featuredPosts={data.allMarkdownRemark.edges} />
		<About />
		<Footer />
	</React.Fragment>
);

export default Home;

export const query = graphql`
	query IndexFeaturedQuery {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { draft: { eq: false }, featured: { eq: true } } }
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
