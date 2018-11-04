import React from 'react';
import {ButtonCheckbox} from 'components/ui/button-checkbox';
import './button-checkbox-group.scss';

const handleClick = (selected, onChange, values, multi) => {
    console.log(selected, values);
    if (multi) {
        const newValue = [...values];
        if (values.includes(selected)) {
            newValue.splice(newValue.indexOf(selected), 1);
        } else {
            newValue.push(selected);
        }
        return onChange(newValue);
    }

    return onChange(values.includes(selected) ? [] : [selected]);
};


export const ButtonCheckboxGroup = ({items = [], values = [], input: {onChange}, multi}) => {
    return items.length > 0 ?
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
                        onClick={() => handleClick(values, onChange, value, multi)}
                    />
                );
            })}
        </div>
        : null;
};
