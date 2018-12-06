import React from 'react';
import styled from 'styled-components';

import { Column } from '../../common/layout';

import PlaceCart from './PlaceCart';
import PlaceMenu from './PlaceMenu';
import PlaceSearch from './PlaceSearch';
import PlaceSignin from './PlaceSignin';

const Navbar = () => (
  <StyledNav>
    <Column gridArea='search'>
      <PlaceSearch />
    </Column>
    <Column gridArea='cart'>
      <PlaceCart />
    </Column>
    <Column gridArea='menu'>
      <PlaceMenu />
    </Column>
    <Column gridArea='signin'>
      <PlaceSignin />
    </Column>
  </StyledNav>
);

const StyledNav = styled.nav`
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

export default Navbar;
