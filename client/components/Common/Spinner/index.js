import React from 'react';
import PropTypes from 'prop-types';
import './spinner.scss';


export default function Spinner(props) {
    const { isFetching } = props;
    return <div className="loading" style={{ display : isFetching ? 'block' : 'none'}}>Loading&#8230;</div>
}

Spinner.displayName = 'Body';
