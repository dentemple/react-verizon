import React from 'react';
import PropTypes from 'prop-types';

import { Cell, Logo } from '../../common';

const PlaceLogo = ({ gridArea }) => (
  <Cell gridArea={gridArea}>
    <Logo />
  </Cell>
);

PlaceLogo.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceLogo;
