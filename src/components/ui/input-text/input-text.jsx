import React from 'react';
import classNames from 'classnames';
import './input-text.scss';

export const Input = (props) => {
    const {numeric, disabled} = props;
    return (
        <input
            type={numeric ? 'number' : 'text'}
            className={classNames('input-text')}
            disabled={disabled || false}
            {...props.input}
        />
    );
};
