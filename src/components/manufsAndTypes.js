/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

//import * as getManufsAndTypes from '../actions/getManufsAndTypes'


export default class ManufsAndTypes extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {


        const {load, isLoading, mfList } = this.props;

        if (!mfList && !isLoading) {
            load();
        }

    }

    render() {

        const { mfList, isLoading } = this.props;

        if (!mfList && !isLoading) {
            return <span>I'm empty</span>;
        } else if (isLoading) {
            return <span>I'm loading</span>
        }

        return <div>

            <p>manufs and types ---- {mfList[1].name}, {mfList[2].name} </p>

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}