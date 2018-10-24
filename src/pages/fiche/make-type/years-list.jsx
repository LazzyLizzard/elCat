import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from '../model/reducer';

export class YearsList extends React.Component {
    onlyYear = item => (
        <span>
            {item.year}
            {' '}
(-)
        </span>
    );

    withYear = ({item, make, typeId}) => (
        <span>
            <Link
                to={`/${NAMESPACE}/mty/${make}/${typeId}/${item.year}`}
            >
                {item.year}
            </Link>
            (
            {item.modelsNumber}
)
        </span>
    );

    render() {
        const {yearsList, make, typeId} = this.props;
        console.log(yearsList.niceYears);
        return (
            <div>
                {
                    map(yearsList.niceYears, niceItem => (
                        <div>
                            {
                                map(niceItem, item => (
                                    <span>
                                        {item.modelsNumber
                                            ? this.withYear({item, make, typeId})
                                            : this.onlyYear(item)
                                        }
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
