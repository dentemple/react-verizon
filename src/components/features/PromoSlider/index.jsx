import React, { Component } from 'react';

import { Row } from '../../common/layout';
import Panel from '../../features/Panel';

class PromoSlider extends Component {
  constructor() {
    super();
    this.state = {
      promos: [
        {
          id: 'promo-slider-iphone',
          heading: 'Switch now and get $300 off iPhone, on us',
          description:
            "There's an amazing iPhone for everyone on your list. Select trade-in required.",
          url: '/'
        },
        {
          id: 'promo-slider-androids',
          heading: 'Save $300 on the latest Androids.',
          description:
            'Just in time for the holidays. New smartphone line and select trade-in required.',
          url: '/'
        },
        {
          id: 'promo-slider-tablets',
          heading: 'Take up to $150 off our top tablets',
          description:
            'Start with $50 off. Save $100 more when you buy any smartphone.',
          url: '/'
        },
        {
          id: 'promo-slider-',
          heading: 'Everything you want for the holidays, fast.',
          description:
            'Choose free Same Day Delivery, 2-day shipping or In-Store Pickup.',
          url: '/'
        }
      ]
    };
  }

  render() {
    return (
      <Row>
        {this.state.promos.map(({ id, ...rest }) => (
          <Panel key={id} {...rest} />
        ))}
      </Row>
    );
  }
}

export default PromoSlider;
