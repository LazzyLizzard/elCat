import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';

const VIEW_MODES = [
    {id: 1, text: 'производитель + тип'},
    {id: 2, text: 'тип + производитель'}
];

export class ViewModes extends React.Component {
    viewMode = this.props.currentViewMode;

    viewToggler = (id) => {
        console.log('id %s', id);
    };

    render() {
        return (
            <div>
                {
                    map(VIEW_MODES, (modeItem) => {
                        const active = modeItem.id === this.viewMode;
                        const btnStyle = active ? {color: '#0f0'} : {};
                        const toggleClicker = () => this.viewToggler(modeItem.id);
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
