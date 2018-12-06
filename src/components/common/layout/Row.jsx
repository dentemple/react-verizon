import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  width: 100%;
`;

Row.propTypes = {
  gridArea: PropTypes.string
};
Row.defaultProps = {
  gridArea: 'auto'
};

export default Row;
