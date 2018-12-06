import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Cell } from './layout';

const CellWithBackground = styled(Cell)`
  /* box */
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  min-height: ${({ height }) => height};
  max-width: ${({ theme }) => theme.screens.maxWidth}px;
  z-index: -1;
`;

CellWithBackground.propTypes = {
  gridArea: PropTypes.string,
  height: PropTypes.string,
  img: PropTypes.string.isRequired,
  theme: PropTypes.object
};
CellWithBackground.defaultProps = {
  gridArea: 'auto',
  height: '100%'
};

export default CellWithBackground;
