import React from 'react';
import {noop} from 'lodash';
import {Link} from 'react-router';
// import PropTypes from 'prop-types';
import {prepareAutoFillData} from 'utils/pick-from-utils';
import {stringify} from 'query-string';
import './pagination.scss';

// TODO [sf] 18.05.2018 rewrite this crap
const link = (pageNumber, queryParams, pickGroupId, transformQuery = false) => (Object.assign(
    {},
    {
        page: pageNumber
    },
    transformQuery === true
        ? Object.assign({}, prepareAutoFillData(queryParams), {pickGroupId})
        : queryParams
));

export class Pagination extends React.Component {
    // static propTypes = {
    //     pagination: PropTypes.shape({
    //         current: PropTypes.number,
    //         total: PropTypes.number,
    //         items: PropTypes.arrayOf(PropTypes.object)
    //     })
    // };

    render() {
        const {
            pagination: {current, total, items},
            pageClickHandler = noop,
            baseUrl,
            pathName,
            queryParams,
            pickGroupId
        } = this.props;

        return (
            <div className="pagination">
                <div className="pagination__total-pages">pagination: total {total} of {current}</div>
                <div>
                    {items.map(pageItem => (
                        /* TODO remove this crap and use classNames */
                        <Link
                            key={pageItem}
                            to={`/${baseUrl}?${stringify(link(pageItem, queryParams, pickGroupId), {encode: false})}`}
                        >
                            <span
                                className={`pagination__item ${current === pageItem && 'pagination__item--current'}`}
                                onClick={() => pageClickHandler(
                                    link(pageItem, queryParams, pickGroupId, true),
                                    pathName)}
                            >
                                {pageItem} |
                            </span>
                        </Link>

                    ))}
                </div>
            </div>
        );
    }
}

