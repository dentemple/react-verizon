import styled from 'styled-components';

const FlatButton = styled.button`
  /* box */
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 100px;
  cursor: pointer;
  height: 36px;
  width: 125px;

  /* content */
  font-size: 12px;
  font-weight: 700;
  text-align: center;

  /* desktop */
  @media (min-width: ${({ theme }) => theme.screens.desktop}px) {
    height: 42px;
    width: 156px;
    font-size: 14px;
  }
`;

export default FlatButton;
