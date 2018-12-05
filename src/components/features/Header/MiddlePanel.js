import React from 'react';

import Column from '../../common/Column';
import ListItem from '../../common/ListItem';
import ListRow from '../../common/ListRow';

const MiddlePanel = () => (
  <Column>
    <FirstRow />
    <SecondRow />
  </Column>
);

const FirstRow = () => (
  <ListRow>
    <ListItem to='/'>Wireless</ListItem>
    <ListItem to='/'>In Home</ListItem>
    <ListItem to='/'>Business</ListItem>
  </ListRow>
);

const SecondRow = () => (
  <ListRow style={{ fontWeight: 'bold' }}>
    <ListItem to='/'>Phones</ListItem>
    <ListItem to='/'>Plans</ListItem>
    <ListItem to='/'>Holiday Deals</ListItem>
    <ListItem to='/'>Shop</ListItem>
    <ListItem to='/'>Support</ListItem>
  </ListRow>
);

export default MiddlePanel;
