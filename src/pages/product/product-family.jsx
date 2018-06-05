import React from 'react';
import {Link} from 'react-router';
import {isEmpty} from 'lodash';

export const ProductFamily = ({descendants = [], title, allowFiltering, itemsPerBlock = 10}) => {
    if (isEmpty(descendants)) {
        return null;
    }
    return (
        <div>
            <h4>{title}</h4>
            {descendants.map(descendant => (
                <div
                    key={descendant.info.products_id}
                >
                    <Link
                        to={`/product/${descendant.urlData.url}`}
                    >
                        {descendant.info.products_name} ({descendant.info.products_name_for_list})
                    </Link>
                </div>
            ))}
        </div>
    );
};
