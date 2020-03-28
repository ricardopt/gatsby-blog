import React from 'react';
// import { Link } from 'gatsby';
import Styled from 'styled-components';
import { colors } from '../../colors';

export default function Tags({ list = [] }) {
  return (
    <TagsList>
      {list.map((tag) => (
        <TagItem key={tag}>
          {/* <Link to={'/tags/${tag}'}>{tag}</Link> */}
          <TagLink href={`/tags/${tag}`}>{tag}</TagLink>
        </TagItem>
      ))}
    </TagsList>
  );
}

const TagsList = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const TagItem = Styled.li`
  margin-right: 12px;
`;

const TagLink = Styled.a`
  padding: 6px 10px;
  display: block;
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
