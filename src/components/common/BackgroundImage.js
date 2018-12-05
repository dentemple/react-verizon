import styled from 'styled-components';
import Row from './Row';

const BackgroundImage = styled(Row)`
  /* box */
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  border: 1px solid #d8dada;
  max-width: 1270px;
  min-height: ${props => props.height};
  z-index: 0;
`;

export default BackgroundImage;
