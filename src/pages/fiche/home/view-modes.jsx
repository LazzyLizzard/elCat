import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';


export class ViewModes extends React.Component {
    viewMode = this.props.currentViewMode;

    viewToggler = (id) => {
        console.log('id %s', id);
    };

    render() {
        const {onClick, viewModes} = this.props;
        return (
            <div>
                {
                    // TODO [sf] 05.10.2017 check if use this function
                    map(viewModes, (modeItem) => {
                        const active = modeItem.id === this.viewMode;
                        const btnStyle = active ? {color: '#0f0'} : {};
                        // const toggleClicker = () => this.viewToggler(modeItem.id);
                        const toggleClicker = () => onClick(modeItem.id);
                        console.warn(this.viewMode);
                        return (
                            <button
                                type="button"
                                style={btnStyle}
                                onClick={toggleClicker}
                            >
                                {modeItem.text}
                            </button>
                        );
                    })
                }
            </div>
        );
    }
}

ViewModes.propTypes = {
    currentViewMode: PropTypes.number
};
