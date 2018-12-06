import React from 'react';
import { FiMenu } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { IconButtonBase } from '../buttons';

const Hamburger = ({ handleClick, ...rest }) => (
  <IconButtonBase onClick={handleClick}>
    <FiMenu {...rest} />
  </IconButtonBase>
);

Hamburger.propTypes = {
  handleClick: PropTypes.func
};

export default Hamburger;
