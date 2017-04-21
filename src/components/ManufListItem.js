import React, { PropTypes, Component } from 'react';

import TransportTypes from './TransportTypes'

class ManufListItem extends Component {


    render() {
        //console.log(this.props);
        const { manufName, manufId, transportTypes, transportTypesData } = this.props;
        const transportTypesPresent = Array.isArray(transportTypes) === true && transportTypes.length > 0 ? true : false;

        return (
            <li>
                {manufName} (id {manufId}, {transportTypesPresent ? transportTypes.length : 'nope'})
                {transportTypesPresent ? (

                    <TransportTypes transportTypesRaw={transportTypes} transportTypesData={transportTypesData} manufId={manufId} />

                ) : (
                    <div>no transport</div>
                )}

            </li>
        )

    }
}
export default ManufListItem;

ManufListItem.propTypes = {
    manufName: PropTypes.string.isRequired,
    manufId: PropTypes.number.isRequired
}