import React from 'react';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { IconButtonBase } from '../buttons';

const IconX = ({ handleClick, ...rest }) => (
  <IconButtonBase onClick={handleClick}>
    <FiX {...rest} />
  </IconButtonBase>
);

IconX.propTypes = {
  handleClick: PropTypes.func
};

export default IconX;
