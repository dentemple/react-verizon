import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlatButton from '../../common/FlatButton';

const CallToAction = ({ gridArea }) => (
  <StyledContainer gridArea={gridArea}>
    <Text>
      Bring on those fuzzy feelings. Get in the holiday spirit with the perfect
      gift.
    </Text>
    <FlatButton>Shop</FlatButton>
  </StyledContainer>
);

const StyledContainer = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  padding: 20px;
`;

const Text = styled.p`
  width: 220px;
  font-size: 16px;
  line-height: 0.95;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    font-size: 17px;
  }
`;

CallToAction.propTypes = {
  gridArea: PropTypes.string
};

export default CallToAction;
