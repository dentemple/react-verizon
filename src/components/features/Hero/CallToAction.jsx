import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FlatButton } from '../../common/buttons';

const CallToAction = () => (
  <>
    <Text>
      Bring on those fuzzy feelings. Get in the holiday spirit with the perfect
      gift.
    </Text>
    <FlatButton>Shop</FlatButton>
  </>
);

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
