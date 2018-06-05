/* eslint-disable camelcase */
import React from 'react';

const inputChangeHandler = (productList, input) => productList.filter((productItem) => {
    const {
        info: {
            products_name,
            products_name_for_list
        }
    } = productItem;
    return products_name.indexOf(input) !== -1 || products_name_for_list.indexOf(input) !== -1;
});

export const ProductFamilyFilter = (productFamily = []) => (
    <div>
        <h4>filter</h4>
        <div>
            <input
                type="text"
                placeholder="например, 120"
            />
        </div>
    </div>
);
