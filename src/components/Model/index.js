import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import {ModelInfo} from './ModelInfo';
import * as modelAction from './actions';

// import {Link} from 'react-router';

class Model extends Component {

	render() {
		return (
			<div>
				<h4>model (detail groups)</h4>
				<ModelInfo modelId={777} load />
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators({
    //    loadListStep1: getManufsAndTypes
    //});
    return {
        load: () => dispatch(modelAction.getModelData(this.props.modelId))
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);

Model.PropTypes = {
	myProp: PropTypes.number
};