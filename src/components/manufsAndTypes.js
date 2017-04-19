/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

import * as getManufsAndTypes from '../actions/getManufsAndTypes'

export default class ManufsAndTypes extends Component {

    render() {

        const test = this.props.mfList;

        return <div>

            <p>manufs and types ---- {test[1].name} </p>

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}