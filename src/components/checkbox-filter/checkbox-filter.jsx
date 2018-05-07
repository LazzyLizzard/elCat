import React from 'react';
import {Field} from 'redux-form';

export const CheckboxFilter = ({label, name}) => (
    <label>
        {label}
        <Field
            name={name}
            component="input"
            type="checkbox"
        />
    </label>
);
