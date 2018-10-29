/* eslint-disable react/no-array-index-key */
import React from 'react';

export const ProductFamilyPages = (props) => {
    const {pagesNumber, currentPage, clickHandler} = props;
    if (pagesNumber === 0) {
        return null;
    }
    return (
        <div className="product-card__filter-pages">
            {
                [...Array(pagesNumber)].map((_, index) => (
                    <div
                        key={`page-${index}`}
                        className={`product-card__filter-pages-item ${index === currentPage && 'product-card__filter-pages-item--active'}`}
                        onClick={() => clickHandler(index)}
                        onKeyUp={() => clickHandler(index)}
                    >
                        {index + 1}
                    </div>
                ))
            }
        </div>
    );
};
