import React from 'react';
import {FilterControl} from './partials/control';
import './filter.scss';

export const FilterComponent = (
    {
        isOpen,
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
                    isOpen={isOpen}
                    controlClickHandler={controlClickHandler}
                />
            </div>
        </div>

        {isOpen &&
        <div className="filter-content">
            content
        </div>
        }
    </div>
);
