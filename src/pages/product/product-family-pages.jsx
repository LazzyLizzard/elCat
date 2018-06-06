/* eslint-disable react/no-array-index-key */
import React from 'react';

export const ProductFamilyPages = (props) => {
    console.log(props);
    const {pagesNumber} = props;
    if (pagesNumber === 0) {
        return null;
    }
    return (
        <div className="product-card__filter-pages">
            <div>pages</div>
            {
                [...Array(props.pagesNumber)].map((_, index) => (
                    <div
                        key={`page-${index}`}
                        className={`product-card__filter-pages-item ${index === props.currentPage && 'product-card__filter-pages-item--active'}`}
                        onClick={() => props.clickHandler(index)}
                    >
                        + {index + 1}
                    </div>
                ))
            }
        </div>
    );
};
