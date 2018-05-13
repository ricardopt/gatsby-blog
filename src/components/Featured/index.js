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

const FeaturedWrapper = Styled.section`
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

const FeaturedPost = Styled.article`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FeaturedImage = Styled.div`
  flex: 1 1 auto;

  @media screen and (min-width: 740px) {
    flex: 1 1 40%;
  }
`;

const FeaturedText = Styled.div`
  flex: 1 1 auto;
  padding: 0;

  @media screen and (min-width: 740px) {
    flex: 1 1 40%;
    padding-left: 30px;
  }
`;

const FeaturedTitle = Styled.h3`
  font-weight: 500;
  line-height: 1.4;

  a {
    text-decoration: none;
  }
`;

const FeaturedDate = Styled.div`
  display: block;
  margin-bottom: 16px;
  line-height: 1;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: $color-dark-gray;
`;

const FeaturedExcerpt = Styled.p``;

export default Featured;
