import React from 'react';
import styled from 'styled-components';

import StyledLink from '../common/StyledLink';
import logo from '../../assets/img/logo.png';

const Logo = () => (
  <MatchLinkSize to='/'>
    <StyledImage src={logo} alt='Verizon' />
  </MatchLinkSize>
);

const MatchLinkSize = styled(StyledLink)`
  width: 112px;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    width: 188px;
  }
`;

const StyledImage = styled.img`
  width: 112px;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    width: 188px;
  }
`;

export default Logo;
