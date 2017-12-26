import React from 'react';

export const ManufacturersList = ({manufsList}) => {
    const {manufList} = manufsList;
    return (
        <div>
            {
                manufList.map(item => (
                    <span>{item.manufacturers_name}</span>
                ))
            }
        </div>
    );
};
