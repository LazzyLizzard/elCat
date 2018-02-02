/**
 * Pick select results display container
 */
import React from 'react';
import {noop} from 'lodash';
import {Pagination} from 'components/ui/pagination';

// const pageClickHandler = (pageNumber) => {
//     console.log(pageNumber);
// };

/**
 *
 * @param {array} result
 * @param {object} pagination
 * @param {function} pageClickHandler
 * @param {string} baseUrl
 * @returns {*}
 * @constructor
 */
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
