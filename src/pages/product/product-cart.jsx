import React from 'react';
import {isNil} from 'lodash';

export class ProductCart extends React.PureComponent {
    render() {
        const {selectedProductId} = this.props;
        return (
            <div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <button
                        type="button"
                        disabled={isNil(selectedProductId)}
                    >
                        add to cart {selectedProductId}
                    </button>
                </div>
            </div>
        );
    }
}
