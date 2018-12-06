import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    max-width: initial;
  }
`;

export default H2;
