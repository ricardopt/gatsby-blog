import React from 'react';
import Link from 'gatsby-link';
import Tags from '../Tags';
import Img from 'gatsby-image';
import Styled from 'styled-components';

const Featured = ({ featuredPosts }) => {
	return (
		<FeaturedWrapper>
			<FeaturedHeading>Featured</FeaturedHeading>
			{featuredPosts.map(({ node }) => (
				<div key={node.id}>
					<FeaturedPost>
						<FeaturedImage>
							<Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
						</FeaturedImage>

						<FeaturedText>
							<FeaturedTitle>
								<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
							</FeaturedTitle>

							<FeaturedDate
								className="blog-post__date"
								dangerouslySetInnerHTML={{ __html: node.frontmatter.date }}
							/>

							<FeaturedExcerpt dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />

							<Tags list={node.frontmatter.tags || []} />
						</FeaturedText>
					</FeaturedPost>
				</div>
			))}
		</FeaturedWrapper>
	);
};

const FeaturedWrapper = Styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid $color-dark-gray;
`;

const FeaturedHeading = Styled.h3`
  display: inline-block;
  letter-spacing: 0.2em;
  line-height: 1;
  color: $color-black;
  padding-bottom: 2px;
  border-bottom: 4px solid $color-black;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const FeaturedPost = Styled.article``;

const FeaturedImage = Styled.div``;

const FeaturedText = Styled.div``;

const FeaturedTitle = Styled.h3``;

const FeaturedDate = Styled.div``;

const FeaturedExcerpt = Styled.p``;

export default Featured;
