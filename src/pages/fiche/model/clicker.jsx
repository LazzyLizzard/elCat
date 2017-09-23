import React from 'react';

export function Clicker({onClick}) {
    return (
        <div>
            <div onClick={onClick(5)}>click</div>
        </div>
    );
}
