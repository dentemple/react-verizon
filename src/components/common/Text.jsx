import styled from 'styled-components';

const Text = styled.p`
  font-size: 1em;
  line-height: 0.95;

  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    font-size: 1.1em;
    margin-top: 0;
  }
`;

export default Text;
