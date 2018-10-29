import React from 'react';
import {map} from 'lodash';

export class DetailsList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {map(this.props.list.groupDetailsList, details => (
                    <div>
                       * {details.partno} {details.description}
                    </div>
                ))}
            </div>
        );
    }
}
