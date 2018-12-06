import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from './Button';

const LinkButton = ({ children, history, to, ...rest }) => (
  <Button onClick={() => history.push(to)} {...rest}>
    {children}
  </Button>
);

LinkButton.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
  to: PropTypes.string
};
LinkButton.defaultProps = {
  to: '/'
};

export default withRouter(LinkButton);
