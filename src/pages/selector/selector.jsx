import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {FORM_DATA} from './test-data';

const SelectorForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <h4>Selector</h4>
            {
                FORM_DATA.groups[0].list.map(boxItem => (
                    <div>
                        {boxItem.label} id {boxItem.id}
                        <Field
                            name={`box${boxItem.id}`}
                            component="input"
                            type="checkbox"
                        />
                    </div>
                ))
            }
        </form>
    );
};

export default reduxForm({form: 'myForm'})(SelectorForm);
