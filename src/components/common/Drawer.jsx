import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Cell } from './layout';
import { IconX } from './icons';

class Drawer extends Component {
  constructor() {
    super();
    this.triggerOnKey = this.triggerOnKey.bind(this);
  }
  triggerOnKey() {
    if (event.keyCode === 27) {
      this.props.handleClick();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.triggerOnKey, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.triggerOnKey, false);
  }

  render() {
    const { children, handleClick, ...rest } = this.props;

    return (
      <StyledContainer {...rest}>
        <Cell gridArea='children'>{children}</Cell>
        <Cell gridArea='x'>
          <IconX handleClick={handleClick} />
        </Cell>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(Cell)`
  /* box */
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  min-height: 33vh;
  width: 100%;
  padding: 20px;

  /* display */
  grid-template-columns: 1fr 50px;
  grid-template-areas: 'children x';
  align-items: start;

  /* positioning */
  position: fixed;
  top: 0;
  left: 0;

  /* content */
  font-size: 2em;
`;

Drawer.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func
};

export default Drawer;
