import React, { Component } from 'react';

import Campaign from '../features/Campaign';
import Hero from '../features/Hero';
import PageContainer from '../common/PageContainer';
import PromoSlider from '../features/PromoSlider';

class HomePage extends Component {
  render() {
    return (
      <PageContainer>
        <Hero />
        <PromoSlider />
        <Campaign />
      </PageContainer>
    );
  }
}

export default HomePage;
