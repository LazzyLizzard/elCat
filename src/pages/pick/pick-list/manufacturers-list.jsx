import React from 'react';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
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
