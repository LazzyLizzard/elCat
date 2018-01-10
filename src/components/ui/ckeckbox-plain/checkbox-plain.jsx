import React from 'react';
import {Field} from 'redux-form';

export const CheckboxPlain = ({props}) => {
    const {label, prefix, value} = props;
    return (
        <span>
            {label}
            <Field
                name={`box[${checkboxItem.valueId}]`}
                component="input"
                type="checkbox"
            />
        </span>
    );
};
