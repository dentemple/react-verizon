import React, { Component } from 'react';
import styled from 'styled-components';

import { BackgroundImage } from '../../common';
import CallToAction from './CallToAction';
import hero from '../../../assets/img/hero.jpg';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <StyledContainer img={hero} height='95vh'>
        <CallToAction gridArea='call-to-action' />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(BackgroundImage)`
  justify-items: start;
  align-items: end;
  grid-template-areas: 'call-to-action';

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    justify-items: end;
  }
`;

export default Hero;
