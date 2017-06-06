import React, {PropTypes, Component} from 'react';

class MakeType extends Component {

	render() {
		return (
			<div>
				<h4>make type</h4>
			</div>
		)
	}
}

export default MakeType;

MakeType.PropTypes = {
	makeId: PropTypes.number,
	yearId: PropTypes.number
};