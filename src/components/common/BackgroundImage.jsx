import styled from 'styled-components';
import PropTypes from 'prop-types';

import Cell from './Cell';

const BackgroundImage = styled(Cell)`
  /* box */
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  min-height: ${({ height }) => height};
  max-width: ${({ theme }) => theme.screens.maxWidth}px;
  z-index: 0;
`;

BackgroundImage.propTypes = {
  gridArea: PropTypes.string,
  height: PropTypes.string,
  img: PropTypes.string,
  theme: PropTypes.object
};

export default BackgroundImage;
