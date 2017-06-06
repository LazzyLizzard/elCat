import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';

class MakeYearTransport extends Component {

    render() {
        return (
            <div>
                <h4>make year transport</h4>

                <div> c : <Link to='/model/465'>cr500</Link> <Link to='/model/4657'>cb700</Link></div>

            </div>
        )
    }
}

export default MakeYearTransport;

MakeYearTransport.PropTypes = {
    makeId: PropTypes.number,
    yearId: PropTypes.number,
    transportId: PropTypes.number
};