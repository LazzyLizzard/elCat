import React from 'react';
import {map} from 'lodash';

export class ViewByTransportType extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>ViewByTransportType</h3>

                <ul>
                    {map(this.props.data, trasportTypeItem =>
                        // console.log(manufItem);
                        (
                            <li>
                                {trasportTypeItem.transportTypeInfo.ttype_name}
                            </li>
                        )
                    )}
                </ul>

            </div>
        );
    }
}
