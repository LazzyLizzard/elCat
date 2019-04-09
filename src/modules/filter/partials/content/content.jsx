import React, {Component} from 'react';
import {get} from 'lodash';
import {Button} from 'components/ui';
import {FilterRow} from './../../partials/row';

export class FilterContent extends Component {
    render() {
        const {filterValues = {}, displayData: {manufList = [], filters}} = this.props;
        console.log('filterValues', get(filterValues, 'm', []));
        return (
            <div className="filter-content-container">
                <div className="filter-content">
                    {manufList &&
                    // TODO [sf] 27-Nov-18 remove .filter after MSBG-116
                    <FilterRow
                        title="manuf"
                        name="m"
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        defaultValue={get(filterValues, 'm', [])}
                        options={
                            manufList
                                .filter(item => item.manufacturers_id !== false)
                                .map(item => ({
                                    value: item.manufacturers_id,
                                    label: item.manufacturers_name
                                }))
                        }
                    />
                    }

                    {filters && filters.length > 0 &&
                    filters.map(filterItem => (
                        <FilterRow
                            title={filterItem.label}
                            name={filterItem.id}
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            defaultValue={get(filterValues, `[${filterItem.id}]`, [])}
                            options={filterItem.data.map(item => ({
                                label: item.label,
                                value: item.value,
                                featured: item.featured
                            }))}
                        />
                    ))}

                </div>
                <div className="filter-footer">
                    <Button
                        label="Применить"
                        type="submit"
                    />
                </div>
            </div>
        );
    }
}
