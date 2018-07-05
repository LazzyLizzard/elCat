import React from 'react';

export const ProductParams = ({params = []}) => {
    if (params instanceof Array && params.length > 0) {
        return (
            <div>
                <h4>params</h4>
                {params.map(paramItem => (
                    <div
                        key={paramItem.value_id}
                    >
                        {paramItem.name} - {paramItem.value}
                    </div>
                ))}
            </div>
        );
    }
    return null;
};
