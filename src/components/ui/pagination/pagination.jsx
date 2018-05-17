import React from 'react';
import {noop} from 'lodash';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// import {prepareAutoFillData} from 'utils/pick-from-utils';
import {stringify} from 'query-string';
import './pagination.scss';

export class Pagination extends React.Component {
    static propTypes = {
        pagination: PropTypes.shape({
            current: PropTypes.number,
            total: PropTypes.number,
            items: PropTypes.arrayOf(PropTypes.object)
        })
    };

    render() {
        const {
            pagination: {current, total, items},
            pageClickHandler = noop,
            baseUrl,
            pathName,
            queryParams
        } = this.props;
        const link = pageNumber => Object.assign(
            {},
            {
                page: pageNumber
            },
            queryParams);
        return (
            <div className="pagination">
                <div className="pagination__total-pages">pagination: total {total} of {current}</div>
                <div>
                    {items.map(pageItem => (
                        /* TODO remove this crap and use classNames */
                        <Link
                            key={pageItem}
                            to={`/${baseUrl}?${stringify(link(pageItem), {encode: false})}`}
                        >
                            <span
                                className={`pagination__item ${current === pageItem && 'pagination__item--current'}`}
                                onClick={() => pageClickHandler(
                                    link(pageItem),
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

