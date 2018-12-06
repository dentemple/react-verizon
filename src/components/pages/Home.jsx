import React, { Component } from 'react';

import { Page } from '../common/layout';

import Campaign from '../features/Campaign';
import Hero from '../features/Hero';
import PromoSlider from '../features/PromoSlider';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <Hero />
        <PromoSlider />
        <Campaign />
      </Page>
    );
  }
}

export default HomePage;
