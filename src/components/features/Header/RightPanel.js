import React from 'react';

import Column from '../../common/Column';
import ListItem from '../../common/ListItem';
import ListRow from '../../common/ListRow';
import TextField from '../../common/TextField';

const RightPanel = () => (
  <Column>
    <FirstRow />
    <SecondRow />
  </Column>
);

const FirstRow = () => (
  <ListRow style={{ justifyContent: 'flex-end' }}>
    <ListItem to='/'>Stores</ListItem>
    <li style={{ margin: '0.5em' }}>
      <TextField placeholder='Search' />
    </li>
    <ListItem to='/'>Cart</ListItem>
  </ListRow>
);

const SecondRow = () => (
  <ListRow style={{ justifyContent: 'flex-end' }}>
    <ListItem to='/'>Español</ListItem>
    <ListItem to='/'>Sign In</ListItem>
  </ListRow>
);

export default RightPanel;
