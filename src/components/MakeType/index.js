import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';

class MakeType extends Component {

	render() {
		return (
			<div>
				<h4>make type</h4>
				<div>honda atv <Link to='/myt/1/2/1991'>1991</Link> 1992</div>
			</div>
		)
	}
}

export default MakeType;

MakeType.PropTypes = {
	makeId: PropTypes.number,
	yearId: PropTypes.number
};