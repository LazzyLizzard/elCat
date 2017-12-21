import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {NAMESPACE} from './reducer';

const mapDispatchToProps = dispatch => ({
    pickListFetcher: () => dispatch(actions.requestPickList())
});

const mapStateToProps = state => state;

class Pick extends React.Component {
    componentDidMount() {
        this.props.pickListFetcher();
    }

    render() {
        const {[NAMESPACE]: {pickList}} = this.props;
        return (
            <div>
                <h3>pick</h3>
                pick groups {pickList ? 'yes' : 'no'}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pick);
