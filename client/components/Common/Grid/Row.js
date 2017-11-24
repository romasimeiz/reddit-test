import React from 'react';
import PropTypes from 'prop-types';

export default function Row({className, onClick, children}) {
  return (
    <tr onClick={onClick} className={className}>{children}</tr>
  );
}

Row.displayName = 'Row';

Row.propTypes = {
  children: PropTypes.node.isRequired
};