import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash';

export class Clicker extends Component {
    render() {
        const {modelLoader, modelId} = this.props;
        const loadModelOnClick = () => modelLoader(modelId);
        return (
            <div>
                <div onClick={loadModelOnClick}>click</div>
            </div>
        );
    }
}

Clicker.propTypes = {
    modelLoader: PropTypes.func,
    modelId: PropTypes.number
};

Clicker.defaultProps = {
    modelLoader: noop,
    modelId: 0
};
