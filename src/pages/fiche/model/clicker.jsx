import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {noop} from 'lodash';

export class Clicker extends Component {

    // static propTypes = {
    //     modelLoader: PropTypes.func,
    //     modelId: PropTypes.number
    // };
    //
    // static defaultProps: {
    //     modelLoader: noop,
    //     modelId: 0
    // };

    render() {
        const {modelLoader, modelId} = this.props;
        const myClick = modelLoader(modelId);
        // console.log(modelId)
        return (
            <div>
                <div onClick={myClick}>click</div>
            </div>
        );
    }
}
