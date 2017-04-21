import React, { Component } from 'react';

class TransportTypes extends Component {

    //constructor(props) {
    //    super(props);
    //}



    onTransportTypeClick(event) {

        console.log(this);
        event.preventDefault();

    }

    render() {
        //let trReady = {};
        const trRaw = this.props.transportTypesRaw;

        console.log(this.props);


        return (
            <ul>

                {trRaw.map((listValue) => {
                    return <li><a
                        href='#'
                        onClick={this.onTransportTypeClick.bind(this)}
                        key={listValue}>{listValue}</a></li>;
                })}

            </ul>
        )
    }
}

export default TransportTypes;