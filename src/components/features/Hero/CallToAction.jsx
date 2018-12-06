import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FlatButton } from '../../common/buttons';
import { Text } from '../../common';

const CallToAction = () => (
  <>
    <Text>
      Bring on those fuzzy feelings. Get in the holiday spirit with the perfect
      gift.
    </Text>
    <FlatButton>Shop</FlatButton>
  </>
);

CallToAction.propTypes = {
  gridArea: PropTypes.string
};

export default CallToAction;
