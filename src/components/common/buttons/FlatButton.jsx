import styled from 'styled-components';

import LinkButton from './LinkButton';

const FlatButton = styled(LinkButton)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 100px;
`;

export default FlatButton;
