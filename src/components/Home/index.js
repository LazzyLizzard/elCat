import React, {PropTypes, Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <h4>Home</h4>
            </div>
        )
    }
}

export default Home;

Home.PropTypes = {
    myProp: PropTypes.number
};