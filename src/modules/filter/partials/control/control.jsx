import React from 'react';
import {noop} from 'lodash';

export const FilterControl = ({
    contentOpen = false,
    controlClickHandler = noop}
) => (
    <div>
        <button
            type="button"
            onClick={() => controlClickHandler()}
        >
            {contentOpen ? 'x' : '+'}
        </button>
    </div>
);
