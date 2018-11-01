import React from 'react';
import {ButtonCheckbox} from 'components/ui/button-checkbox';
import './button-checkbox-group.scss';

export const ButtonCheckboxGroup = ({items = [], values = []}) => (
    items.length > 0 ?
        <div className="button-checkbox-group">
            {items.map((item) => {
                const {label, disabled, value} = item;
                return (
                    <ButtonCheckbox
                        key={value}
                        label={label}
                        disabled={disabled}
                        value={item.value}
                        active={values.includes(value)}
                    />
                );
            })}
        </div>
        : null
);
