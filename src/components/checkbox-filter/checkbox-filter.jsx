import React from 'react';
import {Field} from 'redux-form';

export const CheckboxFilter = ({label, name, featured}) => (
    <label>
        {label} {featured && <span>[*]</span>}
        <Field
            name={name}
            component="input"
            type="checkbox"
        />
    </label>
);
