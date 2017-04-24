import React, { Component } from 'react';

class TransportTypes extends Component {

    //constructor(props) {
    //    super(props);
    //}


    onTransportTypeClick(manufId, transportTypeId) {
        console.log('click, m: %s, t: %s, ', manufId, transportTypeId);
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
                        data-manuf-id={manufId}
                        data-transport-id={transportTypeId}
                        //onClick={this.onTransportTypeClick.bind(this)}
                        onClick={() => this.onTransportTypeClick(manufId, transportTypeId)}
                        key={transportTypeId}>
                        --- transportTypeId {transportTypeId}, manufId {manufId}
                    </a></li>;
                })}

            </ul>
        )
    }
}

export default TransportTypes;