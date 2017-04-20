import React, { PropTypes, Component } from 'react';

class ManufListItem extends Component {


    render() {

        return (
            <li>
                {this.props.manufName} (id {this.props.manufId})
            </li>
        )

    }
}
export default ManufListItem;

ManufListItem.propTypes = {
    modelsList: PropTypes.object.isRequired
}