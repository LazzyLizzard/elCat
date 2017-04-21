import React, { Component } from 'react'
import ManufsAndTypes from '../components/manufsAndTypes'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class App extends Component {

    render() {
//        const ml = this.props.ml.manufacturers;
//        console.log(this.props);
        const { ml, isLoading, trTypesData } = this.props;
        return <div className='row'>
            Elcat

            <ManufsAndTypes mfList={ml} isLoading={isLoading} trTypesData={trTypesData}  />
        </div>
    }


}

function mapStateToProps({manufsAndTypesList}) {
    return {
        ml: manufsAndTypesList.manufacturers,
        trTypesData: manufsAndTypesList.transportTypesData,
        isLoading: manufsAndTypesList.loading
    }
}

//function mapDispatchToProps(dispatch) {
//    //return bindActionCreators({
//    //    loadListStep1: getManufsAndTypes
//    //});
//    return {
//        load: () => dispatch(Actions.getManufsAndTypes())
//    }
//}

//export default App
export default connect(mapStateToProps)(App)

