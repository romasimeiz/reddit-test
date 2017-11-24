import React from 'react';
import PropTypes from 'prop-types';

export default function Body({children}) {
    return <tbody>{children}</tbody>
}

Body.displayName = 'Body';

Body.propTypes = {
    children: PropTypes.node.isRequired
};