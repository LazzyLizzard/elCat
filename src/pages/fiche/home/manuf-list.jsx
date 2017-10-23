import React from 'react';
import {map} from 'lodash';
import {ViewTransportTypes} from './view-transport-types';

export class ManufLister extends React.Component {
    render() {
        console.dir(this.props);
        const {list} = this.props;
        return (
            <ul>
                {map(list, (manufItem) => {
                    // console.log(manufItem);
                    return (
                        <li>
                            {manufItem.manufacturerInfo.manuf_name}
                            <ViewTransportTypes
                                transportList={manufItem.transportList}
                                manufId={manufItem.manufacturerInfo.manuf_id}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
