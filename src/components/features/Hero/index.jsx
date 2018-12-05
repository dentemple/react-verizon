import React, { Component } from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../common/BackgroundImage';
import CallToAction from './CallToAction';
import hero from '../../../assets/img/hero.jpg';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false
    };

    this.videoUrl =
      'https://ss7.vzw.com/is/content/VerizonWireless/2018/Videos/HPM-Holiday-Jolly-1272x800-v2.mp4';
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <BackgroundImage img={hero} height='95vh'>
          {/* <StyledVideo loop autoPlay>
            <source src={this.videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </StyledVideo> */}
          <CallToAction />
        </BackgroundImage>
      );
    } else {
      return <BackgroundImage />;
    }
  }
}

// const StyledVideo = styled.video`
//   /* box */
//   border: 1px solid #d8dada;
//   max-width: 1270px;
//   min-height: 100%;
//   pointer-events: none;
//   z-index: -1;

//   /* positioning */
//   height: auto;
//   object-fit: cover;
//   overflow: hidden;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translateX(-50%) translateY(-50%);
// `;

export default Hero;
