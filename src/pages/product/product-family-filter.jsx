/* eslint-disable camelcase */
import React from 'react';
import {noop} from 'lodash';

export const ProductFamilyFilter = ({onChange = noop, resetField = noop, filterBy = ''}) => (
    <div className="product-card__filter">
        <input
            className="product-card__filter-input"
            type="text"
            placeholder="например, 120"
            onChange={onChange}
            value={filterBy}
        />
        <button
            className="product-card__filter-button"
            type="button"
            onClick={resetField}
        >reset
        </button>
    </div>
);
