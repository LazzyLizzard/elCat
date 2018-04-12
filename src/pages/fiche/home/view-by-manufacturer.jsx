import React from 'react';
import {ViewTransportTypes} from './view-transport-types';

export const ViewByManufacturer = ({data = []}) => (

    <div>
        <h3>ViewByManufacturer</h3>
        <ul>
            {data.map(manufItem => (
                <li key={manufItem.manufacturerInfo.manuf_id}>
                    {manufItem.manufacturerInfo.manuf_name}
                    <ViewTransportTypes
                        transportList={manufItem.transportList}
                    />
                </li>
            ))}
        </ul>
    </div>
);
