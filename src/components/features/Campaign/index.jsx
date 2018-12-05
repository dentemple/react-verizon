import React, { Component } from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../common/BackgroundImage';
import christmas from '../../../assets/img/christmas.jpg';

const Campaign = () => (
  <BackgroundImage img={christmas} height='75vh'>
    <p>Text</p>
  </BackgroundImage>
);

export default Campaign;
