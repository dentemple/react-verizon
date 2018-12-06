import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export default StyledLink;
