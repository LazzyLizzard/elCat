import React from 'react';
import {map} from 'lodash';
import {ViewTransportTypes} from './view-transport-types';

export class ManufLister extends React.Component {
    render() {
        const {list} = this.props;
        return (
            <ul>
                {map(list, (manufItem) => {
                    console.log(manufItem);
                    return (
                        <li>
                            {manufItem.manufinfo.manuf_name}
                            <ViewTransportTypes
                                transportList={manufItem.transportList}
                                manufId={manufItem.manufinfo.manuf_id}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
