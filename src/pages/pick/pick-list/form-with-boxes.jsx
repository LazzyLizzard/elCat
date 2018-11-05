import React from 'react';
import {isNil, noop, get} from 'lodash';
import {HolderBlock} from 'components/holder-block';
import {FormFilterItem} from './form-filter-item';
import './form-with-boxes.scss';

export class FormWithBoxes extends React.PureComponent {
    render() {
        const {formData, boxToggleHandler = noop, filterFieldValues, resetFiltersGroup} = this.props;
        if (isNil(formData.filters) || formData.filters.length === 0) {
            return null;
        }

        return (
            formData.filters.map((filterItem) => {
                const title = `${filterItem.prodParamsGroupName} (prodParamsGroupId ${filterItem.prodParamsGroupId})`;
                console.log('filterItem', filterItem);
                console.log('filterFieldValues', filterFieldValues);
                const fv = get(filterFieldValues, [[filterItem.prodParamsGroupId]], []);
                console.log('fv', fv);
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

