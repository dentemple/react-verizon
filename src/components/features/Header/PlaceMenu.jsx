import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Drawer, ListItem, ListRow, ScreenSwitch } from '../../common';
import { Hamburger } from '../../common/icons';

class PlaceMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderContents() {
    return (
      <>
        <ListRow>
          <ListItem to='/foo'>Wireless</ListItem>
          <ListItem to='/foo'>In Home</ListItem>
          <ListItem to='/foo'>Business</ListItem>
        </ListRow>
        <ListRow style={{ fontWeight: 'bold' }}>
          <ListItem to='/'>Phones</ListItem>
          <ListItem to='/'>Plans</ListItem>
          <ListItem to='/'>Shop</ListItem>
          <ListItem to='/'>Support</ListItem>
        </ListRow>
      </>
    );
  }

  renderButton() {
    return <Hamburger handleClick={this.handleClick} />;
  }

  render() {
    return (
      <>
        <ScreenSwitch
          render={isDesktop =>
            isDesktop ? this.renderContents() : this.renderButton()
          }
        />
        {this.state.isOpen && (
          <Drawer handleClick={this.handleClick}>
            {this.renderContents()}
          </Drawer>
        )}
      </>
    );
  }
}

PlaceMenu.propTypes = {
  gridArea: PropTypes.string
};

export default PlaceMenu;
