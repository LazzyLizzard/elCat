import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from './actions';
import {ManufLister} from './manuf-list';
import {ViewModes} from './view-modes';
import {NAMESPACE} from '../model/reducer';

function mapDispatchToProps(dispatch) {
    return {
        manufRequest: () => dispatch(actions.requestManufacturers())
    };
}

function mapStateToProps(state) {
    return state;
} class FicheHome extends React.Component {componentDidMount() {
        const {[NAMESPACE]: {manufacturers}} = this.props;
        if (!manufacturers) {
            this.props.manufRequest();
        }
    }
    render() {
        const {[NAMESPACE]: {manufacturers, homeViewMode}} = this.props;
        return (
            <div>
                <div>
                    <ViewModes currentViewMode={homeViewMode} />
                    <div>
                        <button type="button">производитель + тип</button>
                        <button type="button" disabled>тип + производитель</button>
                    </div>
                    <div>
                        hon <Link to={`${NAMESPACE}/mt/1/2`}>moto</Link>, <Link to={`${NAMESPACE}/mt/1/2`}>ATV</Link>
                    </div>
                    <hr />
                    {manufacturers &&
                    <ManufLister list={manufacturers} />
                    }

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FicheHome);
