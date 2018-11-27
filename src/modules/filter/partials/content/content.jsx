import React, {Component} from 'react';
import {FilterRow} from './../../partials/row';

export class FilterContent extends Component {
    render() {
        const {displayData: {manufList = [], filters}} = this.props;
        console.log(filters);
        return (
            <div className="filter-content-container">
                <div className="filter-content">
                    {manufList &&
                    // TODO [sf] 27-Nov-18 remove .reduce after MSBG-116
                    <FilterRow
                        title="manuf"
                        name="m"
                        options={
                            manufList.reduce((acc, item) =>
                                item.manufacturers_id && [...acc, {
                                    value: item.manufacturers_id,
                                    label: item.manufacturers_name

                                }], [])
                        }
                    />
                    }

                    {filters && filters.length > 0 &&
                        filters.map(filteItem => (
                            <FilterRow
                                title={filteItem.prodParamsGroupName}
                                name={filteItem.prodParamsGroupId}
                                options={filteItem.prodParamsList.map(item => ({
                                    label: item.parameterName,
                                    value: item.valueId,
                                    featured: item.featured
                                }))}
                            />
                        ))
                    }

                </div>
                <div className="filter-footer">
                    buttons
                </div>
            </div>
        );
    }
}
