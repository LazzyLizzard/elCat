import React from 'react';
import {noop} from 'lodash';
import {Pagination} from 'components/ui/pagination';

// const pageClickHandler = (pageNumber) => {
//     console.log(pageNumber);
// };

export const PickResults = ({result, pagination, pageClickHandler = noop, baseUrl}) => {
    if (result) {
        return (
            <div>
                <h4>Results</h4>
                <Pagination
                    pagination={pagination}
                    pageClickHandler={pageClickHandler}
                    baseUrl={baseUrl}
                />
            </div>
        );
    }
    return null;
};
