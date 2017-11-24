import React from 'react';
import PropTypes from 'prop-types';

const CellHeader = ({text, className, children}) => {
    return (
        <th className={className}>{text || children}</th>
    );
};

CellHeader.propTypes = {
    text: PropTypes.any,
    className: PropTypes.string,
    children: PropTypes.node
};

export default CellHeader;
