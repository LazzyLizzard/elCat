/**
 * manufacturers and transport types
 */

import React, { PropTypes, Component } from 'react'

export default class ManufsAndTypes extends Component {



    render() {

        const test = this.props.mfList;
        return <div>


            <p>manufs and types ---- {test.a} </p>




        </div>
    }
}

ManufsAndTypes.propTypes = {
    ManufAndTypesList: PropTypes.object.isRequired
}