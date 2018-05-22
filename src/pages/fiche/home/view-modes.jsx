import React from 'react';
import PropTypes from 'prop-types';
import {map, noop} from 'lodash';

export class ViewModes extends React.Component {
    // viewMode = this.props.currentViewMode;
    //
    // viewToggler = (id) => {
    //     console.log('id %s', id);
    // };

    render() {
        const {onClick, viewModes, currentViewMode} = this.props;
        return (
            <div>
                {
                    // TODO [sf] 05.10.2017 check if use this function
                    map(viewModes, (modeItem) => {
                        const active = modeItem.key === currentViewMode;
                        const btnStyle = active ? {color: '#007700'} : {};
                        // const toggleClicker = () => this.viewToggler(modeItem.id);
                        const toggleClicker = () => onClick(modeItem.key);
                        return (
                            <button
                                key={modeItem.key}
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
    currentViewMode: PropTypes.string,
    onClick: PropTypes.func
};

ViewModes.defaultProps = {
    currentViewMode: 'byManufacturer',
    onClick: noop
};
