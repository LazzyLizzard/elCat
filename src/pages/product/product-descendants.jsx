import React from 'react';
import {Link} from 'react-router'
import {isEmpty} from 'lodash';

export const ProductDescendants = ({descendants = []}) => {
    if (isEmpty(descendants)) {
        return null;
    }
    return (
        <div>
            <h4>descendants</h4>
            {descendants.map(descendant => (
                <div
                    key={descendant.info.products_id}
                >
                    <Link
                        to={`/product/${descendant.urlData.url}`}
                    >
                        {descendant.info.products_name}
                    </Link>
                </div>
            ))}
        </div>
    );
};
