import React from 'react';
import {ButtonCheckbox} from 'components/ui/button-checkbox';
import './button-checkbox-group.scss';

const handleClick = ({values, onChange, value, multi}) => {
    if (multi) {
        const newValue = [...values];
        if (values.includes(value)) {
            newValue.splice(newValue.indexOf(value), 1);
        } else {
            newValue.push(value);
        }
        return onChange(newValue);
    }

    return onChange(values.includes(value) ? [] : [value]);
};

/**
 *
 * @param {array} items - displayed items
 * @param {array} values - values from form etc
 * @param {function} onChange
 * @param {bool} multi
 * @returns {null}
 * @constructor
 */
export const ButtonCheckboxGroup = ({items = [], values = [], input: {onChange}, multi}) => (
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
                        onClick={() => handleClick({
                            values,
                            onChange,
                            value,
                            multi
                        })}
                    />
                );
            })}
        </div>
        : null);
