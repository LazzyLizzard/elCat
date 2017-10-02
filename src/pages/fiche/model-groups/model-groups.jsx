import React from 'react';
import {Link} from 'react-router';
import noop from 'lodash/noop';
import {NAMESPACE} from '../reducer';

export default function ModelGroups({modelGroups, onClick = noop, ...props}) {
    // console.log(props);
    return (
        <div>
            {modelGroups && modelGroups.map(data => (
                <div>
                    <div
                        key={data.group_id}
                    >
                        <Link
                            to={`/${NAMESPACE}/group/${data.group_id}`}
                            onClick={onClick}
                        >
                            <img src={data.imgPath} alt="" />{data.group_name}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
