import React from 'react';
import styled from 'styled-components';

import { H3, Text } from '../../common';
import { Cell } from '../../common/layout';
import { FlatButton } from '../../common/buttons';
import CellWithBackground from '../../common/CellWithBackground';

import christmas from '../../../assets/img/christmas.jpg';

const Campaign = () => (
  <StyledContainer img={christmas} height='75vh' style={{ padding: 15 }}>
    <Cell gridArea='heading'>
      <H3>Mix and match Unlimited plans for everyone in the family.</H3>
    </Cell>
    <Cell gridArea='description'>
      <Text>
        Get what you need with three Unlimited plans to choose from. Plus get 6
        months free Apple Music. For iOS and Android. $9.99/mo after 6 months
        free.
      </Text>
    </Cell>
    <Cell gridArea='button'>
      <FlatButton>Shop Plans</FlatButton>
    </Cell>
    <Cell gridArea='large-text'>
      <Text style={{ fontWeight: 'bold', fontSize: 50 }}>
        Six months free Apple Music, on us.
      </Text>
    </Cell>
  </StyledContainer>
);

const StyledContainer = styled(CellWithBackground)`
  grid-template-columns: 1fr 0.4fr;
  grid-template-areas: 'heading .' 'description .' 'button .' 'large-text .';

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    grid-template-columns: 1fr 0.8fr 1fr 1fr;
    grid-template-areas: 'heading . description button' 'large-text large-text . .';
    justify-items: end;
  }
`;

export default Campaign;
