import React from 'react';
import Link from 'gatsby-link';
import Styled from 'styled-components';
// import '../../sass/tags.scss';

export default function Tags({ list = [] }) {
	return (
		<TagsList>
			{list.map(tag => (
				<li key={tag}>
					<Link to={`/tags/${tag}`}>{tag}</Link>
				</li>
			))}
		</TagsList>
	);
}

const TagsList = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin-right: 12px;

    a {
      padding: 6px 8px;
      display: block;
      background: #eee;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.1em;
      white-space: nowrap;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;
