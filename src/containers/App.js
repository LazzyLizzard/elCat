import React, { Component } from 'react';
import { Link } from 'react-router';

//import ManufsAndTypes from '../components/manufsAndTypes'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'


class App extends Component {

    render() {
//        const ml = this.props.ml.manufacturers;
//        console.log(this.props);
//        const { ml, isLoading, trTypesData } = this.props;
        return <div>

            <h4>Elcat home</h4>

            <div>
                honda &nbsp;
                <Link to='/my/1/1990'>1990</Link> &nbsp;
                <Link to='/my/1/1991'>1991</Link>
                <hr/>
                <hr/>
            </div>

      </div>
    }


}

//function mapStateToProps({manufsAndTypesList}) {
//    return {
//        ml: manufsAndTypesList.manufacturers,
//        trTypesData: manufsAndTypesList.transportTypesData,
//        isLoading: manufsAndTypesList.loading
//    }
//}

//function mapDispatchToProps(dispatch) {
//    //return bindActionCreators({
//    //    loadListStep1: getManufsAndTypes
//    //});
//    return {
//        load: () => dispatch(Actions.getManufsAndTypes())
//    }
//}

export default App
//export default connect(mapStateToProps)(App)

