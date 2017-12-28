import React from 'react';
import {Field} from 'redux-form';
import {uniqueId} from 'lodash';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
    return (
        <div>
            {
                manufList.map(item => (
                    <span key={uniqueId()}>{item.manufacturers_name}
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
