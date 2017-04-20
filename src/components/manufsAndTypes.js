/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

import ManufList from './ManufList'


export default class ManufsAndTypes extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {


        const {load, isLoading, mfList } = this.props;

        if (!mfList && !isLoading) {

            // see App.js
            load();
        }

    }

    render() {

        const { mfList, isLoading } = this.props;

        if (!mfList && !isLoading) {
            return <div>I'm empty</div>;
        } else if (isLoading) {
            return <div>I'm loading</div>
        }

        return <div>

            <h4>step1</h4>

            <ManufList completeManufList={mfList} />

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
};