import React from 'react';
// import PropTypes from 'prop-types';
import {uniqueId} from 'lodash';
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
        const {pagination: {current, total, items}, pageClickHandler} = this.props;
        console.log(this.props.pagination);
        return (
            <div className="pagination">
                <div className="pagination__total-pages">pagination: total {total} of {current}</div>
                <div>
                    {items.map(pageItem => (
                        /* TODO remove this crap and use classNames */
                        <span
                            key={uniqueId()}
                            className={`pagination__item ${current === pageItem && 'pagination__item--current'}`}
                            onClick={() => pageClickHandler(pageItem)}
                        >
                            {pageItem} |
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}
