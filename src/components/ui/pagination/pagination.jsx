import React from 'react';
import {noop, isNil} from 'lodash';
import {Link} from 'react-router';
// import PropTypes from 'prop-types';
import {prepareAutoFillData} from 'utils/pick-from-utils';
import {stringify} from 'query-string';
import './pagination.scss';

// TODO [sf] 18.05.2018 rewrite this crap
const link = (pageNumber, queryParams, pickGroupId, transformQuery = false) => (Object.assign(
    {},
    {page: pageNumber},
    transformQuery === true
        ? Object.assign({}, prepareAutoFillData(queryParams), {pickGroupId})
        : queryParams
));

// const otherProps = (pageNumber, currentPage) => {
//     const isCurrent = pageNumber === currentPage;
//     return {
//         to: isCurrent
//             ? ''
//             : `/${baseUrl}?${stringify(link(pageItem, queryParams, pickGroupId), {encode: false})}`,
//         className: '',
//         onClick: ''
//     };
// };

export class Pagination extends React.Component {
    // static propTypes = {
    //     pagination: PropTypes.shape({
    //         current: PropTypes.number,
    //         total: PropTypes.number,
    //         items: PropTypes.arrayOf(PropTypes.object)
    //     })
    // };

    render() {
        if (isNil(this.props.pagination)) {
            return null;
        }
        const {
            pagination: {
                currentPage, itemsPerPage, total, pages, pagesNumber
            },
            pageClickHandler = noop,
            baseUrl,
            pathName,
            queryParams,
            pickGroupId
        } = this.props;
        return (
            <div className="pagination">
                <div className="pagination__total-pages">
                    pagination: items found total {total}, per page {itemsPerPage},
                    current {currentPage} of {pagesNumber}
                </div>
                <div className="pagination__navigation">
                    {pages.map((pageItem) => {
                        const isCurrent = pageItem.current;
                        const linkHref = isCurrent
                            ? ''
                            : `/${baseUrl}?${stringify(link(pageItem.pageNumber, queryParams, pickGroupId), {encode: false})}`;
                        const clickHandler = isCurrent
                            ? e => e.preventDefault()
                            : () => pageClickHandler(
                                link(pageItem.pageNumber, queryParams, pickGroupId, true),
                                pathName
                            );
                        return (
                            /* TODO remove this crap and use classNames */
                            <Link
                                key={pageItem.pageNumber}
                                to={linkHref}
                                className={`pagination__item ${isCurrent && 'pagination__item--current'}`}
                                onClick={clickHandler}
                            >
                                <span>
                                    {pageItem.pageNumber}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
