import React from 'react';

import { Text } from '../../common';
import CellWithBackground from '../../common/CellWithBackground';
import christmas from '../../../assets/img/christmas.jpg';

const Campaign = () => (
  <CellWithBackground img={christmas} height='75vh'>
    <Text>Text</Text>
  </CellWithBackground>
);

export default Campaign;
