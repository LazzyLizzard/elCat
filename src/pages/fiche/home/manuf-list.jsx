import React from 'react';
import {Link} from 'react-router';
import {map} from 'lodash';
import {NAMESPACE} from '../model/reducer';
import {TransportTypes} from './transport-types';

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
                                <TransportTypes
                                    transportList={manufItem.manufinfo.transportList}
                                    manufId={manufItem.manufinfo.manuf_id}
                                />
                            </li>
                        );
                    }
                )}
            </ul>
        );
    }
}
