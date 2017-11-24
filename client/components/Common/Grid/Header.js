import React from 'react';

export default function GridHeader({children}) {
    return (
        <thead>{children}</thead>
    );
}

GridHeader.displayName = 'GridHeader';