import React, { Component } from 'react';

import { ListItem, ListRow, Link } from '../../common';
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
        <ListRow style={{ justifyContent: 'flex-end' }}>
          <ListItem to='/'>Español</ListItem>
          <ListItem to='/'>
            <strong>Sign In</strong>
          </ListItem>
        </ListRow>
      );
    } else {
      return (
        <Link to='/' style={{ justifySelf: 'end' }}>
          <strong>Sign in</strong>
        </Link>
      );
    }
  }
}

export default PlaceSignin;
