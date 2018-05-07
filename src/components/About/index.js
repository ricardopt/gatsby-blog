import React from 'react';
// import headshot from '../../../src/img/headshot.jpg';
import '../../sass/about.scss';
import SocialIcons from '../SocialIcons';
import Img from 'gatsby-image';

export default ({ data }) => (
	<div>
		<h1>Hello gatsby-image</h1>
		{/* <Img resolutions={{ resolutions }} /> */}
	</div>
);

export const query = graphql`
	query GatsbyImageSampleQuery {
		file(relativePath: { eq: "../../img/headshot.jpg" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				resolutions(width: 125, height: 125) {
					...GatsbyImageSharpResolutions
				}
			}
		}
	}
`;
