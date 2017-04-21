/**
 * manufacturers and transport types
 * включается в App
 */

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/getManufsAndTypes'
import ManufList from './ManufList'


//export default
class ManufsAndTypes extends Component {


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

        const { mfList, isLoading, trTypesData } = this.props;

        if (!mfList && !isLoading) {
            return <div>I'm empty</div>;
        } else if (isLoading) {
            return <div>I'm loading</div>
        }

        return <div>

            <h4>step1</h4>

            <ManufList completeManufList={mfList} transportTypesData={trTypesData}/>

        </div>
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators({
    //    loadListStep1: getManufsAndTypes
    //});
    return {
        load: () => dispatch(Actions.getManufsAndTypes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManufsAndTypes);

ManufsAndTypes.propTypes = {
    mfList: PropTypes.object.isRequired
};