import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import { colors } from '../colors';

export default function Tags({ pageContext }) {
  const { posts, post, tag } = pageContext;
  if (tag) {
    return (
      <Layout>
        <TagsPage>
          <TagsHeading>
            There {post.length === 1 ? 'is' : 'are'} <span>{post.length}</span>{' '}
            post{post.length === 1 ? '' : 's'} tagged with <span>{tag}</span>
          </TagsHeading>
          <TagsList>
            {post.map(({ id, frontmatter, fields }) => {
              return (
                <TagsListItem key={id}>
                  <TaggedItem>
                    <TagLink to={frontmatter.path}>{frontmatter.title}</TagLink>
                  </TaggedItem>
                </TagsListItem>
              );
            })}
          </TagsList>
          <Link to="/tags">All tags</Link>
        </TagsPage>
      </Layout>
    );
  }
  return (
    <AllTagsWrapper>
      <AllTagsHeading>Tags</AllTagsHeading>
      <AllTagsList>
        {Object.keys(posts).map((tagName) => {
          const tags = posts[tagName];
          return (
            <AllTagsListItem key={tagName}>
              <TagItem to={`/tags/${tagName}`}>{tagName}</TagItem>
            </AllTagsListItem>
          );
        })}
      </AllTagsList>
    </AllTagsWrapper>
  );
}

const TagsPage = Styled.article`
  max-width: 960px;
  margin: 0 20px;

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
  }
`;

const TagsHeading = Styled.h1`
  font-size: 2.4rem;
  color: ${colors.midGray};

  span {
    font-weight: bold;
    color: ${colors.black};
  }
`;

const TagsList = Styled.ul`
  list-style: none;
  margin: 0 0 4rem;
  padding: 0;
`;

const TagsListItem = Styled.li`
  padding: 4px 0;
`;

const TaggedItem = Styled.h2``;

const AllTagsWrapper = Styled.section`
  max-width: 960px;
  margin: 0 20px;

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
  }
`;

const AllTagsHeading = Styled.h4`
  font-size: 2.4rem;
`;

const AllTagsList = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AllTagsListItem = Styled.li`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TagLink = Styled(Link)`
  text-transform: uppercase;
  font-size: 2rem;

  &:hover {
    text-decoration: none;
  }
`;

const TagItem = Styled(Link)`
  padding: 6px 10px;
  display: inline-block;
  background: ${colors.gray};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.3em;
  white-space: nowrap;

  &:hover {
    background: ${colors.lightGray};
  }
`;
