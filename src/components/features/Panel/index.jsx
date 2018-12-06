import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { H2, HR, Link, Text } from '../../common';
import { Cell, Row } from '../../common/layout';

import { ChevronRight } from '../../common/icons';

const Panel = ({ description, heading, url }) => (
  <PlaceContents>
    <Row gridArea='heading'>
      <Link to={url}>
        <H2>{heading}</H2>
      </Link>
    </Row>
    <Row gridArea='line'>
      <HR />
    </Row>
    <Row gridArea='description'>
      <Text>{description}</Text>
    </Row>
    <Row gridArea='arrow' style={{ justifyContent: 'flex-end' }}>
      <Link to={url}>
        <ChevronRight />
      </Link>
    </Row>
  </PlaceContents>
);

Panel.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const PlaceContents = styled(Cell)`
  /* box */
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  height: 320px;
  padding: 0 20px;

  /* display */
  grid-gap: 10px 0;
  grid-template-rows: 138px 5px 80px 1fr;
  grid-template-areas:
    'heading'
    'line'
    'description'
    'arrow';
`;

export default Panel;
