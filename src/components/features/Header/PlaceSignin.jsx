import React from 'react';

import { ListItem, ListRow, Link, ScreenSwitch } from '../../common';

const PlaceSignin = () => (
  <ScreenSwitch
    render={isDesktop => (isDesktop ? <LargeScreen /> : <SmallScreen />)}
  />
);

const LargeScreen = () => (
  <ListRow style={{ justifyContent: 'flex-end' }}>
    <ListItem to='/'>Español</ListItem>
    <ListItem to='/'>
      <strong>Sign In</strong>
    </ListItem>
  </ListRow>
);

const SmallScreen = () => (
  <Link to='/' style={{ justifySelf: 'end' }}>
    <strong>Sign in</strong>
  </Link>
);

export default PlaceSignin;
