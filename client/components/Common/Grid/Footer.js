import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({children}) {
    return (
        <tfoot>{children}</tfoot>
    );
}

Footer.displayName = 'Footer';

Footer.propTypes = {
    children: PropTypes.node.isRequired
};