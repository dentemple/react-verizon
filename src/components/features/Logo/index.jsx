import React from 'react';
import styled from 'styled-components';

import Link from '../../common/Link';
import logo from '../../../assets/img/logo.png';

const Logo = () => (
  <SizeAdjustedLink to='/'>
    <StyledImage src={logo} alt='Verizon' />
  </SizeAdjustedLink>
);

const SizeAdjustedLink = styled(Link)`
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
