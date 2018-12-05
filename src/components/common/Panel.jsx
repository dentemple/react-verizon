import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HorizontalLine from './HorizontalLine';
import StyledLink from './StyledLink';

const Panel = ({ description, heading, url }) => (
  <FixedColumn>
    <StyledLink to={url}>
      <FixedHeading>{heading}</FixedHeading>
    </StyledLink>
    <HorizontalLine />
    <p>{description}</p>
    <StyledLink to={url}>
      <p>Arrow</p>
    </StyledLink>
  </FixedColumn>
);
Panel.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const FixedColumn = styled.article`
  /* box */
  background-color: white;
  border: 1px solid #d8dada;
  height: 320px;
  margin: 0;
  padding: 20px;
`;

const FixedHeading = styled.h2`
  height: 118px;
  margin: 0px 0px 20px;
`;

export default Panel;
