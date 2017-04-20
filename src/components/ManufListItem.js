import React, { PropTypes, Component } from 'react';

class ManufListItem extends Component {



    render() {
        const {manufName, manufId, transportTypes} = this.props;
        return (
            <li>
                {manufName} (id {manufId}, {Array.isArray(transportTypes) === true ? transportTypes.length : 'nope'})
            </li>
        )

    }
}
export default ManufListItem;

ManufListItem.propTypes = {
    manufName: PropTypes.string.isRequired,
    manufId: PropTypes.number.isRequired
}