/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

//import * as getManufsAndTypes from '../actions/getManufsAndTypes'


export default class ManufsAndTypes extends Component {


    constructor(props) {
        super(props);

        //const { getManufsAndTypes } = this.props.getManufsAndTypes;

        this.state = {
            rotator: true
        }

        setTimeout(() => {
            this.setState(
                {
                    rotator: false
                }
            )
        }, 1000)
    }


    render() {

        const { mfList } = this.props;

        return <div>

            <p>manufs and types ---- {mfList[1].name}, {mfList[2].name} </p>

            {this.state.rotator ?
                (
                    <div>please wait</div>
                )
                :
                null
            }


        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}