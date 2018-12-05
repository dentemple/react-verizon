import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cell, ListItem, ListRow, TextField } from '../../common';
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
    const { gridArea } = this.props;
    const { isDesktop } = this.state;

    if (isDesktop) {
      return (
        <Cell gridArea={gridArea}>
          <ListRow style={{ justifyContent: 'flex-end' }}>
            <ListItem to='/'>Stores</ListItem>
            <li style={{ margin: '0.5em' }}>
              <TextField placeholder='Search' />
            </li>
          </ListRow>
        </Cell>
      );
    } else {
      return (
        <Cell gridArea={gridArea}>
          <Search />
        </Cell>
      );
    }
  }
}

PlaceSearch.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceSearch;
