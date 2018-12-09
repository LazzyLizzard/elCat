import React from 'react';
import classNames from 'classnames';
import './styles/button.scss';

export class Button extends React.Component {
    render() {
        const {
            label,
            type = 'button',
            disabled = false
        } = this.props;
        return (
            <button
                className={classNames('button')}
                type={type}
                disabled={disabled}
            >
                {label}
            </button>
        );
    }
}