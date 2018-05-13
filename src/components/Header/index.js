import React from 'react';
import Navigation from '../Nav';
import SiteLogo from '../Logo';
import Styled from 'styled-components';
import { colors } from '../../colors';

const Header = () => (
	<SiteHeader>
		<HeaderBrand>
			<SiteLogo />
		</HeaderBrand>
		<Navigation />
	</SiteHeader>
);

const SiteHeader = Styled.header`
  padding: 20px 0;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeaderBrand = Styled.div`
  padding-bottom: 10px;
`;

export default Header;
