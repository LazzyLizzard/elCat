import React from 'react';
import classNames from 'classnames';
import './input-text.scss';

export const Input = (props) => {
    console.log(props);
    return (
        <input
            type="text"
            className={classNames('input-text')}
            {...props.input}
        />
    );
};
