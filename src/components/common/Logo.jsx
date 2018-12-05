import React from 'react';
import styled from 'styled-components';

import { StyledLink } from '../common';
import logo from '../../assets/img/logo.png';

const Logo = () => (
  <StyledLink to='/'>
    <StyledImage src={logo} alt='Verizon' />
  </StyledLink>
);

const StyledImage = styled.img`
  width: 112px;
`;

export default Logo;
