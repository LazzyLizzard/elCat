import React from 'react';
// import PropTypes from 'prop-types';
import {map} from 'lodash';
import {Link} from 'react-router';
import {NAMESPACE} from '../reducer';

export const PickGroups = ({pickGroupsList}) => (
    <div>
        {
            map(pickGroupsList, group => (
                <div key={group.groupNameTransformed}>
                    <Link
                        to={`/${NAMESPACE}/${group.groupNameTransformed}/`}
                    >
                        {group.group_name}
                    </Link>
                    (id {group.id})
                </div>
            ))
        }
    </div>
);

// PickGroups.propTypes = {
//     pickGroupsList: PropTypes.shape({
//         id: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.number
//         ]).required,
//         group_name: PropTypes.string,
//         groupNameTransformed: PropTypes.string
//     })
// };

PickGroups.defaultProps = {
    pickGroupsList: {}
};
