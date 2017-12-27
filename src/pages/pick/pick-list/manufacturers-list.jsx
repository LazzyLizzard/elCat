import React from 'react';
import {uniqueId} from 'lodash';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
    return (
        <div>
            {
                manufList.map(item => (
                    <span key={uniqueId()}>{item.manufacturers_name}</span>
                ))
            }
        </div>
    );
};
