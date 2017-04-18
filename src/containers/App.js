import React, { Component } from 'react'
import ManufsAndTypes from '../components/manufsAndTypes'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {

    render() {

        return <div className='row'>
            Elcat

            <ManufsAndTypes mfList={{a:1}}/>
        </div>
    }


}

function mapStateToProps(state) {
    return {
        ml: state.ManufAndTypesList
    }


}

//export default App
export default connect(mapStateToProps)(App)

