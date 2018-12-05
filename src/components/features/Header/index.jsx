import React from 'react';
import styled from 'styled-components';

import PlaceCart from './PlaceCart';
import PlaceLogo from './PlaceLogo';
import PlaceMenu from './PlaceMenu';
import PlaceSearch from './PlaceSearch';
import PlaceSignin from './PlaceSignin';

const Header = () => (
  <StyledHeader role='banner'>
    <PlaceLogo gridArea='logo' />
    <Navbar>
      <PlaceSearch gridArea='search' />
      <PlaceCart gridArea='cart' />
      <PlaceMenu gridArea='menu' />
      <PlaceSignin gridArea='signin' />
    </Navbar>
  </StyledHeader>
);

const StyledHeader = styled.header`
  /* box */
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5em 1.5em 0;
  width: 100%;

  /* display - small screen */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 20px;
  grid-template-areas: 'logo nav' 'logo nav';

  /* positioning */
  position: fixed;
  z-index: 1;

  /* content */
  font-size: 0.8em;

  /* desktop */
  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    grid-column-gap: 20px;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: initial;
    padding-bottom: 1.5em;
  }
`;

const Navbar = styled.nav`
  /* display */
  grid-area: nav;
  display: grid;
  justify-content: flex-end;
  grid-column-gap: 20px;
  grid-template-columns: 25px 25px 25px;
  grid-template-rows: 50px 20px;
  grid-template-areas:
    'search cart menu'
    '. signin signin';

  /* desktop */
  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    grid-column-gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: initial;
    grid-template-areas:
      'menu search cart'
      'menu signin signin';
  }
`;

export default Header;
