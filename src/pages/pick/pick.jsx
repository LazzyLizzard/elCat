import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

function mapDispatchToProps(dispatch) {
    return {
        pickListFetcher: () => dispatch(actions.requestPickList())
    };
}

function mapStateToProps(state) {
    return state;
}

class Pick extends React.Component {
    componentDidMount() {
        this.props.pickListFetcher();
    }

    render() {
        return (
            <div>
                pick
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pick);
