import React from 'react';
import Link from 'gatsby-link';
import Button from '../Button';
import Img from 'gatsby-image';
import Styled from 'styled-components';
import Eyebrow from '../Eyebrow';
import { colors } from '../../colors';

const Featured = ({ featuredPosts }) => {
	return (
		<FeaturedWrapper>
			{featuredPosts.map(({ node }) => (
				<FeaturedInner key={node.id}>
					<FeaturedPost>
						<FeaturedImage>
							<Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
						</FeaturedImage>

						<FeaturedText>
							<Eyebrow>Featured Post</Eyebrow>
							<FeaturedDate
								className="blog-post__date"
								dangerouslySetInnerHTML={{ __html: node.frontmatter.date }}
							/>
							<FeaturedTitle>
								<Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
							</FeaturedTitle>

							<FeaturedExcerpt dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />
							<StyledLink href={node.frontmatter.path}>Read the full post</StyledLink>
						</FeaturedText>
					</FeaturedPost>
				</FeaturedInner>
			))}
		</FeaturedWrapper>
	);
};

const FeaturedWrapper = Styled.section`
  padding: 0 0 4rem;
  margin: 0 0 40px;

  @media screen and (min-width: 768px) {
    background: ${colors.lightGray};
    padding-top: 12rem;
    padding-bottom: 6rem;
    margin: 0 0 80px;
  }
`;

const FeaturedInner = Styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const FeaturedPost = Styled.article`
  position: relative;
`;

const FeaturedImage = Styled.div`
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

const FeaturedText = Styled.div`
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

const StyledLink = Styled.a`
  display: inline-block;
  padding: .8rem 1.4rem;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.2rem;
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

const FeaturedTitle = Styled.h3`
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

const FeaturedDate = Styled.div`
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

const FeaturedExcerpt = Styled.p`
  font-size: 1.6rem;
`;

export default Featured;
