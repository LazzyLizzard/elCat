import React from 'react';
import {FilterControl} from './partials/control';
import {FilterContent} from './partials/content';
import {FilterTags} from './partials/tags';
import './filter.scss';

export const FilterComponent = (
    {
        contentOpen,
        controlClickHandler,
        displayData,
        filterValues
    }
) => (
    <div className="filter">
        <div className="filter-header">
            <div className="filter-header__title">Фильтр</div>
            <div className="filter-header__tags">
                <FilterTags
                    filterValues={filterValues}
                />
            </div>
            <div className="filter-header__control">
                <FilterControl
                    contentOpen={contentOpen}
                    controlClickHandler={controlClickHandler}
                />
            </div>
        </div>

        {contentOpen &&
            <FilterContent
                displayData={displayData}
                filterValues={filterValues}
            />
        }
    </div>
);
