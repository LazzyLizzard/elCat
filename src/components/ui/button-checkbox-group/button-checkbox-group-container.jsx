import React from 'react';
import classNames from 'classnames';
import './button-checkbox-group.scss';

export const ButtonCheckboxGroup = (props) => {
    const {items, value = []} = props;
    return (
        // TODO [sf] 01-Nov-18 add check
        <div>
            {items.map((item) => {
                const {label, disabled} = item;
                const isActive = value.includes(item.value);
                return (
                    <div key={item.value} className="button-checkbox-group">
                        <label
                            className={classNames(
                                'bbb',
                                {'bbb-active': isActive}
                            )}
                        >
                            <input
                                name={item.label}
                                // id={item.value}
                                disabled={disabled}
                                value={item.value}
                            />
                            <span>{label}</span>
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
