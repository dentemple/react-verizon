import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListRow = styled.ul`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

ListRow.propTypes = {
  gridArea: PropTypes.string,
  theme: PropTypes.object
};
ListRow.defaultProps = {
  gridArea: 'auto'
};

export default ListRow;
