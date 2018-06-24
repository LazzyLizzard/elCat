import React from 'react';
import {isNil} from 'lodash';

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
                    <button
                        type="button"
                        disabled={isSuperProduct || isNil(selectedProductId)}
                    >
                        add to cart
                    </button>
                    {' '}
                    props selectedProductId: {selectedProductId}
                </div>
            </div>
        );
    }
}
