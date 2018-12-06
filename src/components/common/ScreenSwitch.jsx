import React, { Component } from 'react';
import { theme } from '../../theme';

class ScreenSwitch extends Component {
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
    return this.props.render(this.state.isDesktop);
  }
}

export default ScreenSwitch;
