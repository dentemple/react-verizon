import React from 'react';

import Column from '../../common/Column';
import Logo from '../../common/Logo';
import StyledLink from '../../common/StyledLink';

const LeftPanel = () => (
  <Column>
    <StyledLink to='/'>
      <Logo />
    </StyledLink>
  </Column>
);

export default LeftPanel;
