import React from 'react';
import {Field} from 'redux-form';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
    return (
        <div>
            {
                manufList.map(item => (
                    <span key={item.manufacturers_id}>{item.manufacturers_name}
                        <Field
                            name={`m[${item.manufacturers_id}]`}
                            component="input"
                            type="checkbox"
                        /> |</span>
                ))
            }
        </div>
    );
};
