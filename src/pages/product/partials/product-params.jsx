import React from 'react';

export const ProductParams = ({params = []}) => (
    Array.isArray(params) && params.length > 0 ?
        (
            <div>
                <h4>params</h4>
                {params.map(paramItem => (
                    <div
                        key={paramItem.value_id}
                    >
                        {paramItem.name} {' '} - {paramItem.value}
                    </div>
                ))}
            </div>
        )
        : null
);
