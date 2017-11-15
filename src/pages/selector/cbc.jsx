import React, {Component, PropTypes} from 'react';
import {isUndefined, isArray, noop} from 'lodash';

class MultiCheckboxField extends Component {
    getCurrentValues = () => {
        console.dir('getCurrentValues this.props.field');
        console.dir(this.props.field);
        const {field: {value, initialValue}} = this.props;

        let previousValues = [];

        if (!isUndefined(value) && value !== '') {
            previousValues = value;
        } else if (!isUndefined(initialValue) && initialValue !== '') {
            previousValues = initialValue;
        }

        const currentValues = isArray(previousValues) ? [...previousValues] : [previousValues];

        return currentValues;
    };

    handleChange = (event, id) => {
        const {field: {onChange}} = this.props;
        const values = this.getCurrentValues();

        console.log('handleChange values');
        console.log(values);
        console.log(event.target.checked);

        if (event.target.checked) {
            console.log('push ', id);
            values.push(id);
        } else {
            console.log('remove ', id);
            values.splice(values.indexOf(id), 1);
        }

        console.log('post values');
        console.log(values);

        return onChange(values);
    };

    render() {
        const {label, options, field} = this.props;
        const values = this.getCurrentValues();

        console.log('render values');
        console.log(values);

        return (
            <div className="form-group">
                {label &&
                <label>{label}</label>
                }

                <div>
                    {options.map((option) => {
                        const isChecked = values.indexOf(option.id) > -1;

                        return (
                            <div
                                key={option.id}
                                className="checkbox"
                            >
                                <label>
                                    <input
                                        {...field}
                                        type="checkbox"
                                        onChange={event => this.handleChange(event, option.id)}
                                        // onBlur={() => onBlur(values)}
                                        // onBlur={() => onBlurHandler(values)}
                                        onBlur={noop}
                                        checked={isChecked}
                                        value={option.id}
                                    />
                                    {option.label}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

MultiCheckboxField.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            label: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]).isRequired
        })
    ).isRequired,
    field: PropTypes.object.isRequired
};

export default MultiCheckboxField;
