import React from 'react';
import {Link} from 'react-router';
import {map} from 'lodash';
import {NAMESPACE} from '../model/reducer';

export class ManufLister extends React.Component {
    render() {
        return (
            <ul>
                {map(this.props.list, manufItem => (
                    <li>
                        <Link
                            to={`/${NAMESPACE}/mt/${manufItem.manuf_id}/2`}
                            key={manufItem.manuf_id}
                        >
                            {manufItem.manuf_name}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}
