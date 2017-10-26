import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from 'pages/fiche/model/reducer';

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
                                <ul>
                                    {map(trasportTypeItem.manufacturersList, zzz => (
                                        <li>
                                            <Link
                                                to={`/${NAMESPACE}/mt/${zzz.manufacturerId}/${zzz.transportId}`}
                                            >
                                                {zzz.manufacturerName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    )}
                </ul>

            </div>
        );
    }
}
