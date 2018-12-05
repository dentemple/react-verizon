import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cell, ListItem, ListRow, StyledLink } from '../../common';
import { theme } from '../../../theme';

class PlaceSignin extends Component {
  constructor() {
    super();
    this.state = {
      isDesktop: false
    };

    this.updateScreen = this.updateScreen.bind(this);
  }

  componentDidMount() {
    this.updateScreen();
    window.addEventListener('resize', this.updateScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreen);
  }

  updateScreen() {
    this.setState({ isDesktop: window.innerWidth > theme.screens.desktop });
  }

  render() {
    const { gridArea } = this.props;
    const { isDesktop } = this.state;

    if (isDesktop) {
      return (
        <Cell gridArea={gridArea}>
          <ListRow style={{ justifySelf: 'end' }}>
            <ListItem to='/'>Español</ListItem>
            <ListItem to='/'>
              <strong>Sign In</strong>
            </ListItem>
          </ListRow>
        </Cell>
      );
    } else {
      return (
        <Cell gridArea={gridArea}>
          <StyledLink to='/' style={{ justifySelf: 'end' }}>
            <strong>Sign in</strong>
          </StyledLink>
        </Cell>
      );
    }
  }
}

PlaceSignin.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceSignin;
