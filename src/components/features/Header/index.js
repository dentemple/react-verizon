import React from 'react';
import styled from 'styled-components';

import { Cell, TextField } from '../../common';
import { Cart, HamburgerMenu, Search } from '../../common/icons';

import Logo from '../../common/Logo';
import StyledLink from '../../common/StyledLink';

const Header = () => (
  <StyledHeader role='banner'>
    <Cell gridArea='logo'>
      <StyledLink to='/'>
        <Logo />
      </StyledLink>
    </Cell>
    <Cell gridArea='search'>
      <Search />
    </Cell>
    <Cell gridArea='cart'>
      <Cart />
    </Cell>
    <Cell gridArea='menu'>
      <HamburgerMenu />
    </Cell>
    <Cell gridArea='signin'>
      <p style={{ margin: 0 }}>Sign in</p>
    </Cell>
  </StyledHeader>
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
  /* position: fixed; */
  z-index: 1;

  /* content */
  font-size: 0.8em;
`;

export default Header;
