import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Update({link, children}) {
    return (
        <span>
            <NavLink activeClassName="active" to={link}>
                <span className='fa fa-pencil'> </span>
            </NavLink>
        </span>
    );
}