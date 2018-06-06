/* eslint-disable camelcase */
import React from 'react';
import {noop} from 'lodash';

export const ProductFamilyFilter = ({onChange = noop, resetField = noop, filterBy = ''}) => (
    <div>
        <h4>filter</h4>
        <div>
            <input
                type="text"
                placeholder="например, 120"
                onChange={onChange}
                value={filterBy}
            />
            <button
                type="button"
                onClick={resetField}
            >reset</button>
        </div>
    </div>
);
