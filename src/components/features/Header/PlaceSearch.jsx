import React, { Component } from 'react';

import { ListItem, ListRow } from '../../common';
import { InputField } from '../../common/forms';
import { Search } from '../../common/icons';
import { theme } from '../../../theme';

class PlaceSearch extends Component {
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
        <ListRow style={{ justifyContent: 'flex-end' }}>
          <ListItem to='/'>Stores</ListItem>
          <li style={{ margin: '0.5em' }}>
            <InputField placeholder='Search' />
          </li>
        </ListRow>
      );
    } else {
      return <Search />;
    }
  }
}

export default PlaceSearch;
