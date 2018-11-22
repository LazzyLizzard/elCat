import React from 'react';
import {noop} from 'lodash';

export const FilterControl = ({
    isOpen = false,
    controlClickHandler = noop}
) => (
    <div>
        <button
            type="button"
            onClick={() => controlClickHandler()}
        >
            {isOpen ? 'x' : '+'}
        </button>
    </div>
);
