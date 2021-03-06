import React from 'react';
import {isNil, noop, get} from 'lodash';
import {HolderBlock} from 'components/holder-block/index';
import {FormFilterItem} from '../filter-row-options/form-filter-item';
import './form-with-boxes.scss';

// TODO [sf] 06-Nov-18 rename properly
export class FilterRows extends React.PureComponent {
    render() {
        const {formData, boxToggleHandler = noop, filterFieldValues, resetFiltersGroup} = this.props;
        if (isNil(formData.filters) || formData.filters.length === 0) {
            return null;
        }

        return (
            formData.filters.map((filterItem) => {
                const title = `${filterItem.prodParamsGroupName} (prodParamsGroupId ${filterItem.prodParamsGroupId})`;
                const fv = get(filterFieldValues, [[filterItem.prodParamsGroupId]], []);
                return (
                    <HolderBlock
                        key={filterItem.prodParamsGroupId}
                        title={title}
                        collapsible
                    >
                        <FormFilterItem
                            filterData={filterItem}
                            onClickCheckbox={boxToggleHandler}
                            filterFieldValues={fv}
                            resetFiltersGroup={resetFiltersGroup}
                        />
                    </HolderBlock>
                );
            })
        );
    }
}

