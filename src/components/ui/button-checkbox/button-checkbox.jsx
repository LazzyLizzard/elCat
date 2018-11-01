import React from 'react';
import classNames from 'classnames';
import './button-checkbox.scss';

export const ButtonCheckbox = (props) => {
    const {disabled, active, label, value} = props;
    return (
        <label
            className={classNames(
                'button-checkbox__label',
                {
                    'button-checkbox__label--active': active,
                    'button-checkbox__label--disabled': disabled
                }
            )}
        >
            <input
                readOnly
                className="button-checkbox__input"
                name={label}
                // id={item.value}
                disabled={disabled}
                value={value}
            />
            <span>{label}</span>
        </label>
    );
};
