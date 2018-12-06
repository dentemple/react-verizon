import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from '../common';

const ListItem = ({ children, to }) => (
  <StyledItem>
    <Link to={to}>{children}</Link>
  </StyledItem>
);

const StyledItem = styled.li`
  margin: 0.5em;
`;

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default ListItem;
