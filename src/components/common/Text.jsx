import styled from 'styled-components';

const Text = styled.p`
  max-width: 220px;
  font-size: 1em;
  line-height: 0.95;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    font-size: 1.1em;
  }
`;

export default Text;
