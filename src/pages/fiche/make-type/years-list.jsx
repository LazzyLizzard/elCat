import React from 'react';
import {forEach} from 'lodash';

export class YearsList extends React.Component {
    render() {
        const {yearsList} = this.props;
        console.log(yearsList.niceYears);
        return (
            <div>
                {
                    forEach(yearsList.niceYears, (niceItem) => {
                        forEach(niceItem, item => (
                            <div>{item.year}</div>
                        ));
                    })
                }
            </div>
        );
    }
}
