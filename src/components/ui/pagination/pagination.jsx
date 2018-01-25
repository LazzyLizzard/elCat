import React from 'react';
import {Link} from 'react-router';
// import PropTypes from 'prop-types';
import './pagination.scss';

export class Pagination extends React.Component {
    // static propTypes = {
    //     pagination: PropTypes.shape({
    //         current: PropTypes.number,
    //         total: PropTypes.number,
    //         items: PropTypes.arrayOf(PropTypes.object)
    //     })
    // };

    render() {
        const {pagination: {current, total, items}, pageClickHandler, baseUrl, pageUri = ''} = this.props;
        const clickHandler = (pageItem) => {
            return pageClickHandler(pageItem);
        };
        return (
            <div className="pagination">
                <div className="pagination__total-pages">pagination: total {total} of {current}</div>
                <div>
                    {items.map(pageItem => (
                        /* TODO remove this crap and use classNames */
                        <Link
                            key={pageItem}
                            to={`/${baseUrl}/page/${pageItem}/?x=${pageItem}${pageUri}`}
                        >
                            <span
                                className={`pagination__item ${current === pageItem && 'pagination__item--current'}`}
                                onClick={() => clickHandler(pageItem)}
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
