import React from 'react';
import classNames from 'classnames';
import './button-cart.scss';

const CLASS_NAME = 'button-cart';

export const ButtonCart = (props) => {
    const {
        label,
        disabled,
        productInCart
    } = props;

    return (<button
        className={classNames(
            CLASS_NAME,
            {[`${CLASS_NAME}--disabled`]: disabled})
        }
        disabled={disabled}
        title={disabled ? 'Выберите одн из вариантов' : 'Добавить в корзину'}
    >
        {label}
    </button>);
};
