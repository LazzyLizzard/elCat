import React from 'react';
import {map} from 'lodash';

export class TransportTypes extends React.Component {
    render() {
        const {transportList, manufId} = this.props;
        return (
            <ul>
                {
                    map(transportList, item => (
                        <li>* {item.ttype_name_display}</li>
                    ))
                }

            </ul>
        );
    }
}
