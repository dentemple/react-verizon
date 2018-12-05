import React from 'react';
import PropTypes from 'prop-types';

import { Cell } from '../../common';
import { Cart } from '../../common/icons';

const PlaceCart = ({ gridArea }) => (
  <Cell gridArea={gridArea}>
    <Cart />
  </Cell>
);

PlaceCart.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceCart;
