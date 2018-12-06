import React from 'react';

import { ListItem, ListRow, ScreenSwitch } from '../../common';
import { InputField } from '../../common/forms';
import { Search } from '../../common/icons';

const PlaceSearch = () => (
  <ScreenSwitch
    render={isDesktop => (isDesktop ? <LargeScreen /> : <SmallScreen />)}
  />
);

const LargeScreen = () => (
  <ListRow style={{ justifyContent: 'flex-end' }}>
    <ListItem to='/'>Stores</ListItem>
    <li style={{ margin: '0.5em' }}>
      <InputField placeholder='Search' />
    </li>
  </ListRow>
);

const SmallScreen = () => <Search />;

export default PlaceSearch;
