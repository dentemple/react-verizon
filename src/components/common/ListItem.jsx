import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StyledLink from './StyledLink';

const ListItem = ({ children, to }) => (
  <StyledListItem>
    <StyledLink to={to}>{children}</StyledLink>
  </StyledListItem>
);
ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

const StyledListItem = styled.li`
  margin: 0.5em;
`;

export default ListItem;
