import React from 'react';
import Link from 'gatsby-link';
import Styled, { isStyledComponent } from 'styled-components';

const Navigation = props => {
	return (
		<MainNav>
			<MainNavList>
				<MainNavItem>
					<Link exact to={'/'} activeClassName="active">
						Home
					</Link>
				</MainNavItem>
				<MainNavItem>
					<Link strict to={'/blog/'} activeClassName="active">
						Blog
					</Link>
				</MainNavItem>
				<MainNavItem>
					<Link exact to={'/about'} activeClassName="active">
						About
					</Link>
				</MainNavItem>
			</MainNavList>
		</MainNav>
	);
};

const MainNav = Styled.nav``;

const MainNavList = Styled.ul``;

const MainNavItem = Styled.li``;

export default Navigation;
