import React, { PropTypes, Component } from 'react';

class ManufListItem extends Component {



    render() {
        const {manufName, manufId} = this.props;
        return (
            <li>
                {manufName} (id {manufId})
            </li>
        )

    }
}
export default ManufListItem;

ManufListItem.propTypes = {
    manufName: PropTypes.string.isRequired,
    manufId: PropTypes.number.isRequired
}