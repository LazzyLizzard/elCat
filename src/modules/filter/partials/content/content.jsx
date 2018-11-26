import React, {Component} from 'react';
import {FilterRow} from './../../partials/row';

export class FilterContent extends Component {
    render() {
        const {displayData: {manufList, filters}} = this.props;
        console.log('FilterContent displayData', filters);
        return (
            <div className="filter-content-container">
                <div className="filter-content">
                    {manufList &&
                    <FilterRow
                        title="manuf"
                        data={manufList}
                    />
                    }

                    {/*{filters && filters.length > 0 &&*/}
                    {/*// filters.map(filte)*/}
                    {/*}*/}

                </div>
                <div className="filter-footer">
                    buttons
                </div>
            </div>
        );
    }
}
