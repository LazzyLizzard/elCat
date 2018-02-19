import React from 'react';
import {Field} from 'redux-form';
import {PICK_FORM_MANUFACTURERS} from './../field-names';

export const ManufacturersList = ({formData}) => {
    const {manufList} = formData;
    return (
        <div>
            {
                manufList.map(item => (
                    <span key={item.manufacturers_id}>{item.manufacturers_name}
                        <Field
                            name={`${PICK_FORM_MANUFACTURERS}[${item.manufacturers_id}]`}
                            component="input"
                            type="checkbox"
                        /> |</span>
                ))
            }
        </div>
    );
};
