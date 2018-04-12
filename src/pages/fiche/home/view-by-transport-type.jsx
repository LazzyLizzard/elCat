import React from 'react';
import {Link} from 'react-router';
import {uniqueId} from 'lodash';
import {NAMESPACE} from 'pages/fiche/model/reducer';

export const ViewByTransportType = ({data = []}) => {
    console.log(data);
    return (
        <div>
            <h3>ViewByTransportType</h3>

            <ul>
                {data.map(trasportTypeItem => (
                    <li key={uniqueId()}>
                        {trasportTypeItem.transportTypeInfo.ttype_name}
                        <ul>
                            {trasportTypeItem.manufacturersList.map(zzz => (
                                <li key={uniqueId()}>
                                    <Link
                                        to={`/${NAMESPACE}/mt/${zzz.manufacturerId}/${zzz.transportId}`}
                                    >
                                        {zzz.manufacturerName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};
