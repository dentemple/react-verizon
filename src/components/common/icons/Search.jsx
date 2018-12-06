import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { IconButtonBase } from '../buttons';

const Search = ({ handleClick, ...rest }) => (
  <IconButtonBase onClick={handleClick}>
    <FiSearch {...rest} />
  </IconButtonBase>
);

Search.propTypes = {
  handleClick: PropTypes.func
};

export default Search;
