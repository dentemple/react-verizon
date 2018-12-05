import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cell = styled.div`
  display: grid;
  grid-area: ${props => props.gridArea};
`;

Cell.propTypes = {
  gridArea: PropTypes.string,
  theme: PropTypes.object
};

export default Cell;