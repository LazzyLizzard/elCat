/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

export default class ManufsAndTypes extends Component {


    constructor(props) {
        super(props);

        this.state = {
            a: 'swerwer'
        }

        setTimeout(() => {
            this.setState(
                {
                    a: 'done'
                }
            )
        }, 5000)
    }


    render() {

        const { mfList } = this.props;
        //getInitialState();
        return <div>

            <p>manufs and types ---- {mfList[1].name}, {mfList[2].name} </p>

            <p>{this.state.a}</p>

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}