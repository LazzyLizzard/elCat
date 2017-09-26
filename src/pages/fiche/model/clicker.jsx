import React, {Component} from 'react';
import {noop} from 'lodash';

export class Clicker extends Component {
    render() {
        const {onClick, modelId} = this.props;
        const myClick = onClick(modelId);
        console.log(modelId)
        return (
            <div>
                <div onClick={myClick}>click</div>
            </div>
        );
    }
}
