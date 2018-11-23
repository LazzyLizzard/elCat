import React from 'react';
import {FilterControl} from './partials/control';
import {FilterContent} from './partials/content';
import './filter.scss';

export const FilterComponent = (
    {
        contentOpen,
        controlClickHandler,
        displayData
    }
) => (
    <div className="filter">
        <div className="filter-header">
            <div className="filter-header__title">Фильтр</div>
            <div className="filter-header__tags">тэги</div>
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
            />
        }
    </div>
);
