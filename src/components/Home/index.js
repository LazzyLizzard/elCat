import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router'
class Home extends Component {

    render() {
        return (
            <div>
                <h4>Home</h4>

                <div>
                    <Link to='myt/4/5/888'>my</Link>
                </div>


            </div>
        )
    }
}

export default Home;

Home.PropTypes = {
    myProp: PropTypes.number
};