import React from 'react';

export default function Loader({
    model,
    visible
}) {
    const vs = visible ? 'block' : 'none';
    return (
        <div style={{display: vs}}>
            LOADING {model}
        </div>
    );
}
