// https://github.com/leroy0211/form-redux-checkbox-group
import React, {Component} from 'react';
import {Field, FieldArray} from 'redux-form';
import {uniqueId} from 'lodash';
// import PropTypes from 'prop-types';

export default class CheckboxGroup extends Component {
    // static propTypes = {
    //     options: PropTypes.arrayOf(PropTypes.shape({
    //         label: PropTypes.string.isRequired,
    //         value: PropTypes.string.isRequired
    //     })).isRequired
    // };



    field = ({input, meta, options}) => {
        const {name, onChange} = input;
        const {touched, error} = meta;
        const inputValue = input.value;

        const checkboxes = options.map(({label, value}, index) => {
            const handleChange = (event) => {
                const arr = [...inputValue];
                console.log(input.value);
                if (event.target.checked) {
                    arr.push(value);
                } else {
                    arr.splice(arr.indexOf(value), 1);
                }
                return onChange(arr);
            };
            const checked = inputValue.includes(value);
            return (
                <label key={uniqueId()}>
                    <input
                        type="checkbox"
                        name={`${name}`}
                        value={value}
                        checked={checked}
                        onChange={handleChange}
                    />
                    <span>{label}</span>
                </label>
            );
        });

        return (
            <div>
                <div>{checkboxes}</div>
                {touched && error && <p className="error">{error}</p>}
            </div>
        );
    };

    render() {
        return <Field {...this.props} type="checkbox" component={this.field} />;
    }
}
