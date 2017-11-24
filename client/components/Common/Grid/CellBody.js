import React from 'react';
import PropTypes from 'prop-types';

const CellBody = ({text, className, onClick, children}) => {
    return (
        <th onClick={onClick} className={className}>{text || children}</th>
    );
};

CellBody.propTypes = {
    text: PropTypes.any,
    className: PropTypes.string,
    children: PropTypes.node
};

export default CellBody;
