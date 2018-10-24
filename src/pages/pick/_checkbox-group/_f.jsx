import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import MultiCheckboxField from './cbc';

reduxForm({
    form: 'favouriteFruits',
    fields: ['fruits']
});
export default class FavouriteFruitsForm extends Component {
    render() {
        const {
            handleSubmit,
            fields: {
                fruits
            }
        } = this.props;

        const fruitOptions = [
            {
                id: 'apple',
                label: 'Apples'
            },
            {
                id: 'banana',
                label: 'Bananas'
            },
            {
                id: 'orange',
                label: 'Oranges'
            }
        ];

        return (
            <form onSubmit={handleSubmit}>
                <MultiCheckboxField
                    label="Favourite Fruits"
                    options={fruitOptions}
                    field={fruits}
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

FavouriteFruitsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired
};
