import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Nav';
import Styled from 'styled-components';
import '../../sass/header.scss';
import '../../sass/nav.scss';

const Header = () => (
	<SiteHeader>
		<HeaderBrand>
			<HeaderLink className="site-name__link" href="/">
				Mario<span>Hernandez</span>
			</HeaderLink>
		</HeaderBrand>
		<Navigation />
	</SiteHeader>
);

const SiteHeader = Styled.header``;

const HeaderBrand = Styled.div``;

const HeaderLink = Styled.a``;

export default Header;
