import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from 'pages/fiche/model/reducer';

const displayTransportTypeName = transportTypeItem => (
    transportTypeItem.ttype_name_display
        ? transportTypeItem.ttype_name_display
        : transportTypeItem.ttype_name
);

export const ViewTransportTypes = ({transportList = []}) => {
    return (
        <ul>
            {
                transportList.map(item => (
                    <li key={`${item.manuf_id}-${item.ttype_id}`}>
                        <Link
                            to={`/${NAMESPACE}/mt/${item.manuf_id}/${item.ttype_id}`}
                        >
                            {displayTransportTypeName(item)}
                        </Link>
                    </li>
                ))
            }

        </ul>
    );
};

