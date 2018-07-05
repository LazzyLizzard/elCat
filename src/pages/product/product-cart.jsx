import React from 'react';
import {isNil} from 'lodash';
import {ButtonCart} from 'components/button-cart';

export class ProductCart extends React.PureComponent {
    render() {
        const {selectedProductId, isSuperProduct} = this.props;
        console.log('-> isSuperProduct', isSuperProduct);
        return (
            <div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <ButtonCart
                        disabled={isSuperProduct || isNil(selectedProductId)}
                        label="Купить"
                    />
                    {' '}
                    props selectedProductId: {selectedProductId}
                </div>
            </div>
        );
    }
}
