import React from 'react';
import {Field} from 'redux-form';

export const CheckboxFilter = ({label, name, featured}) => (
// eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
        {label} {featured && <span>[*]</span>}
        <Field
            name={name}
            component="input"
            type="checkbox"
        />
    </label>
);
