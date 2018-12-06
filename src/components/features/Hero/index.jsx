import React, { Component } from 'react';
import styled from 'styled-components';

import { CellWithBackground } from '../../common';
import { Cell } from '../../common/layout';

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
      <StyledBackground img={hero} height='95vh'>
        <Cell gridArea='call-to-action'>
          <CallToAction />
        </Cell>
      </StyledBackground>
    );
  }
}

const StyledBackground = styled(CellWithBackground)`
  padding: 20px;
  justify-items: start;
  align-items: end;
  grid-template-areas: 'call-to-action';

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    justify-items: end;
  }
`;

export default Hero;
