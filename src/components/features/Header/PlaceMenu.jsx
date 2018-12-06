import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListRow } from '../../common';
import { Hamburger } from '../../common/icons';
import { theme } from '../../../theme';

class PlaceMenu extends Component {
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
    const { isDesktop } = this.state;

    if (isDesktop) {
      return (
        <>
          <ListRow>
            <ListItem to='/'>Wireless</ListItem>
            <ListItem to='/'>In Home</ListItem>
            <ListItem to='/'>Business</ListItem>
          </ListRow>
          <ListRow style={{ fontWeight: 'bold' }}>
            <ListItem to='/'>Phones</ListItem>
            <ListItem to='/'>Plans</ListItem>
            <ListItem to='/'>Holiday&nbsp;Deals</ListItem>
            <ListItem to='/'>Shop</ListItem>
            <ListItem to='/'>Support</ListItem>
          </ListRow>
        </>
      );
    } else {
      return <Hamburger />;
    }
  }
}

PlaceMenu.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceMenu;
