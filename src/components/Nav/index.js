import React from 'react';
import Link from 'gatsby-link';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Nav = props => {
	return (
		<MainNav>
			<NavList>
				<NavItem>
					<Link exact to={'/'} activeClassName="active">
						Home
					</Link>
				</NavItem>
				<NavItem>
					<Link strict to={'/blog/'} activeClassName="active">
						Blog
					</Link>
				</NavItem>
			</NavList>
		</MainNav>
	);
};

const MainNav = Styled.nav`
  padding: 20px 0;
`;

const NavList = Styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
`;

const NavItem = Styled.li`
  margin: 0 10px;
  padding: 4px 10px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.black};
    font-size: 1.5rem;
    font-weight: normal;
    transition: color 0.3s ease-in-out;
  
    &.active,
    &:hover {
      padding-bottom: 2px;
      color: ${colors.darkGray};
      border-bottom: 4px solid ${colors.black};
    }
  }
`;

export default Nav;
