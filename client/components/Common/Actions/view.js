import React from 'react';


export default function View({ title, link, children }) {
    return (

        <span>
            <a onClick={link} title={title}>
                <span className='fa fa-eye' > </span>
            </a>
        </span>

    );
}