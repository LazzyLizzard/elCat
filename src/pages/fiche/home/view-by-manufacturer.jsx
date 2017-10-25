import React from 'react';
import {map} from 'lodash';
import {ViewTransportTypes} from './view-transport-types';

export class ViewByManufacturer extends React.Component {
    render() {
        return (
            <div>
                <h3>ViewByManufacturer</h3>
                <ul>
                    {map(this.props.data, manufItem =>
                        // console.log(manufItem);
                        (
                            <li>
                                {manufItem.manufacturerInfo.manuf_name}
                                <ViewTransportTypes
                                    transportList={manufItem.transportList}
                                    manufId={manufItem.manufacturerInfo.manuf_id}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}
