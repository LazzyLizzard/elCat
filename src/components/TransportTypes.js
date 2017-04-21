import React, { Component } from 'react';

class TransportTypes extends Component {

    constructor(props) {
        super(props);
        this.onTransportTypeClick = this.onTransportTypeClick.bind(this);
    }

    onTransportTypeClick(event) {
        console.log(event);
        event.preventDefault();
    }

    render() {
        //let trReady = {};
        const trRaw = this.props.transportTypesRaw;

        console.log(trRaw);

        //console.log(trRaw);
        return (
            <ul>

                {trRaw.map((listValue) => {
                    return <li><a
                        href="#"
                        onlCick={this.onTransportTypeClick}
                        key={listValue}>{listValue}</a></li>;
                })}

            </ul>
        )
    }
}

export default TransportTypes;