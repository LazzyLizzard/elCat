import React, { Component } from 'react'
import ManufsAndTypes from '../components/manufsAndTypes'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


//import * as getManufsAndTypes from '../actions/getManufsAndTypes'

class App extends Component {

    render() {

        console.log(this.props);

        const  ml  = this.props.ml.manufacturers;

        return <div className='row'>
            Elcat

            <ManufsAndTypes mfList={ml}/>
        </div>
    }


}

function mapStateToProps(state) {
    return {
        ml: state.manufsAndTypesList
    }


}

//export default App
export default connect(mapStateToProps)(App)

