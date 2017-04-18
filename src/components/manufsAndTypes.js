/**
 * manufacturers and transport types
 */

import React, { PropTypes, Component } from 'react'

export default class ManufsAndTypes extends Component {



    render() {

        const a = this.props.a;
        return <div>


            <p>manufs and types ---- {a} </p>




        </div>
    }
}

ManufsAndTypes.propTypes = {
    ManufAndTypesList: PropTypes.object.isRequired
}