import React, { Component } from 'react';
import styled from 'styled-components';

import FlatButton from '../../common/FlatButton';

const CallToAction = () => (
  <StyledContainer>
    <Text>
      Bring on those fuzzy feelings. Get in the holiday spirit with the perfect
      gift.
    </Text>
    <FlatButton>Shop</FlatButton>
  </StyledContainer>
);

const StyledContainer = styled.div`
  /* box */
  padding: 20px;

  /* positioning */
  position: absolute;
  bottom: 10%;
  right: 0;
`;

const Text = styled.p`
  /* box */
  width: 220px;

  /* content */
  font-size: 19px;
  line-height: 18px;
`;

export default CallToAction;
