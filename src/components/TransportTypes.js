import React, { Component } from 'react';

class TransportTypes extends Component {

    //constructor(props) {
    //    super(props);
    //}


    onTransportTypeClick(event) {
        console.log('click');
        event.preventDefault();
    }

    render() {
        //let trReady = {};
        const trRaw = this.props.transportTypesRaw;
        const transportTypesData = this.props.transportTypesData;
        const manufId = this.props.manufId;

        console.log(transportTypesData);

        return (
            <ul>

                {trRaw.map((transportTypeId) => {
                    return <li><a
                        href='#'
                        onClick={this.onTransportTypeClick.bind(this)}
                        key={transportTypeId}>
                        --- transportTypeId {transportTypeId}, manufId {manufId}
                    </a></li>;
                })}

            </ul>
        )
    }
}

export default TransportTypes;