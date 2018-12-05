import React from 'react';
import styled from 'styled-components';

import { Cell, Logo } from '../../common';
import { Cart, HamburgerMenu, Search } from '../../common/icons';

const Header = () => (
  <StyledHeader role='banner'>
    <PlaceLogo gridArea='logo' />
    <PlaceSearch gridArea='search' />
    <PlaceCart gridArea='cart' />
    <PlaceMenu gridArea='menu' />
    <PlaceSignin gridArea='signin' />
  </StyledHeader>
);

const PlaceSearch = () => (
  <Cell gridArea='search'>
    <Search />
  </Cell>
);

const PlaceLogo = () => (
  <Cell gridArea='logo'>
    <Logo />
  </Cell>
);

const PlaceCart = () => (
  <Cell gridArea='cart'>
    <Cart />
  </Cell>
);

const PlaceMenu = () => (
  <Cell gridArea='menu'>
    <HamburgerMenu />
  </Cell>
);

const PlaceSignin = () => (
  <Cell gridArea='signin'>
    <p style={{ margin: 0, justifySelf: 'end' }}>Sign in</p>
  </Cell>
);

const StyledHeader = styled.header`
  /* box */
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 1.5em 1.5em 0;
  width: 100%;

  /* display */
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 25px 25px 25px;
  grid-template-rows: 50px 20px;
  grid-template-areas:
    'logo search cart menu'
    '. . signin signin';

  /* positioning */
  position: fixed;
  z-index: 1;

  /* content */
  font-size: 0.8em;
`;

export default Header;
