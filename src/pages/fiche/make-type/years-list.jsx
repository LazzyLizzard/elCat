import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';

export class YearsList extends React.Component {
    render() {
        const {yearsList} = this.props;
        console.log(yearsList.niceYears);
        return (
            <div>
                {
                    map(yearsList.niceYears, niceItem => (
                        <div>
                            {
                                map(niceItem, item => (
                                    <span><Link to={item.year}>{item.year}</Link> ({item.modelsNumber}) </span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
