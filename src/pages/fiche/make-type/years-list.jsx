import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from './../../fiche/model/reducer';

export class YearsList extends React.Component {
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
                                        <Link
                                            to={`/${NAMESPACE}/mty/${make}/${typeId}/${item.year}`}
                                        >
                                            {item.year}
                                        </Link>
                                        ({item.modelsNumber})
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
