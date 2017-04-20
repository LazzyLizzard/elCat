/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'

import ManifList from './ManufList'


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
            return <div>I'm empty</div>;
        } else if (isLoading) {
            return <div>I'm loading</div>
        }

        return <div>

            <ManifList completeManufList={mfList} />

        </div>
    }
}

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
}