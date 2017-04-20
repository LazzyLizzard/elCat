import React, { Component } from 'react';

class TransportTypes extends Component {
    render() {
        let trReady = {};
        const trRaw = this.props.transportTypesRaw;

        trRaw.forEach((element, index)=> {
            trReady[element] = {
                el: element,
                index: index
            }
        });



        //console.log(trRaw);

        //console.log(trRaw);
        return (

            <div>

            </div>

        );
    }
}

export default TransportTypes;