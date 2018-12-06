import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

const Button = ({ children, history, to, ...rest }) => (
  <StyledButton onClick={() => history.push(to)} {...rest}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  /* box */
  cursor: pointer;
  height: 36px;
  width: 125px;

  /* content */
  font-size: 12px;
  font-weight: 700;
  text-align: center;

  /* desktop */
  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    height: 42px;
    width: 156px;
    font-size: 14px;
  }
`;

Button.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
  to: PropTypes.string
};
Button.defaultProps = {
  to: '/'
};

export default withRouter(Button);
