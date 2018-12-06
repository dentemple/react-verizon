import React, { Component } from 'react';

import { Drawer, ListItem, ListRow, ScreenSwitch } from '../../common';
import { InputField } from '../../common/forms';
import { Search } from '../../common/icons';

class PlaceSearch extends Component {
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
      <ListRow style={{ justifyContent: 'flex-end' }}>
        <ListItem to='/'>Stores</ListItem>
        <li style={{ margin: '0.5em' }}>
          <InputField placeholder='Search' />
        </li>
      </ListRow>
    );
  }

  renderButton() {
    return <Search handleClick={this.handleClick} />;
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
          <Drawer onClick={this.handleClick}>{this.renderContents()}</Drawer>
        )}
      </>
    );
  }
}

export default PlaceSearch;
