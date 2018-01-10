import React from 'react';
import {Pagination} from 'components/ui/pagination';

// const pageClickHandler = (pageNumber) => {
//     console.log(pageNumber);
// };

export const PickResults = ({result, pagination, pageClickHandler, baseUrl}) => {
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
