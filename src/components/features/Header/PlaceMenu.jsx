import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListRow, ScreenSwitch } from '../../common';
import { Hamburger } from '../../common/icons';

const PlaceMenu = () => (
  <ScreenSwitch
    render={isDesktop => (isDesktop ? <LargeScreen /> : <SmallScreen />)}
  />
);

const LargeScreen = () => (
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

const SmallScreen = () => <Hamburger />;

PlaceMenu.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceMenu;
