import styled from 'styled-components';

import Button from './Button';

const FlatButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 100px;
`;

export default FlatButton;
