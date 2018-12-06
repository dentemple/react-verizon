import React from 'react';
import styled from 'styled-components';

import { Row } from '../../common/layout';

import Navbar from './Navbar';
import PlaceLogo from './PlaceLogo';

const Header = () => (
  <StyledHeader role='banner'>
    <Row gridArea='logo'>
      <PlaceLogo />
    </Row>
    <Navbar />
  </StyledHeader>
);

const StyledHeader = styled.header`
  /* box */
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5em 1.5em 0;
  width: 100%;

  /* display */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 20px;
  grid-template-areas: 'logo nav' 'logo nav';

  /* positioning */
  position: fixed;

  /* content */
  font-size: 0.8em;

  /* media - desktop */
  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    grid-column-gap: 20px;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: initial;
    padding-bottom: 1.5em;
  }
`;

export default Header;
