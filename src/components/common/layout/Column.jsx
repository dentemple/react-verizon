import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  flex-direction: column;
`;

Column.propTypes = {
  gridArea: PropTypes.string,
  theme: PropTypes.object
};
Column.defaultProps = {
  gridArea: 'auto'
};

export default Column;
