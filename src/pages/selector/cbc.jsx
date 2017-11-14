import React, {Component, PropTypes} from 'react';
import {isUndefined, isArray} from 'lodash';

class MultiCheckboxField extends Component {
    getCurrentValues = () => {
        console.dir(this.props);
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
        const {field} = this.props;
        const {onChange} = field;
        const values = this.getCurrentValues();

        if (event.target.checked) {
            values.push(id);
        } else {
            values.splice(values.indexOf(id), 1);
        }

        return onChange(values);
    };

    render() {
        const {label, options, field, field: {onBlur}} = this.props;
        const values = this.getCurrentValues();

        const onBlurHandler = (v) => {
            console.log(v);
            return onBlur(v);
        };

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
                                        onBlur={onBlurHandler}
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
