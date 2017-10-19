import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from './../model/reducer';

export class ViewTransportTypes extends React.Component {

    displayTransportTypeName = transportTypeItem => (
        transportTypeItem.ttype_name_display
            ? transportTypeItem.ttype_name_display
            : transportTypeItem.ttype_name
    );

    render() {
        const {transportList, manufId} = this.props;
        return (
            <ul>
                {
                    map(transportList, item => (
                        <li>
                            <Link
                                to={`/${NAMESPACE}/mt/${item.manuf_id}/${item.ttype_id}`}
                            >
                                {this.displayTransportTypeName(item)}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        );
    }
}
