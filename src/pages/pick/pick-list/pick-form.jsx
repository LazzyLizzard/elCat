import React from 'react';
import {reduxForm} from 'redux-form';
import {get} from 'lodash';
import {ManufacturersList} from './manufacturers-list';
import {FormWithBoxes} from './form-with-boxes';
import {
    PICK_FORM_PAGE,
    PICK_FORM_GROUP_ID,
    PICK_FORM_FILTERS,
    PICK_FORM_MANUFACTURERS
} from './../field-names';
import {NAMESPACE} from './../reducer';
// TODO think where import below should be
import {toggleBoxesHandler} from '../actions';

const formInitialValues = {
    [PICK_FORM_PAGE]: 1,
    [PICK_FORM_GROUP_ID]: null
};

class PickForm extends React.Component {
    componentDidMount() {
        const {autoFillData, pickGroupId, autofill, change, forceFormSubmit} = this.props;
        change(PICK_FORM_GROUP_ID, pickGroupId);
        // TODO
        let doSubmit = false;
        if (get(autoFillData, PICK_FORM_FILTERS)) {
            doSubmit = true;
            autofill(PICK_FORM_FILTERS, autoFillData[PICK_FORM_FILTERS]);
        }
        if (get(autoFillData, PICK_FORM_MANUFACTURERS)) {
            doSubmit = true;
            autofill(PICK_FORM_MANUFACTURERS, autoFillData[PICK_FORM_MANUFACTURERS]);
        }
        if (doSubmit === true) {
            forceFormSubmit(NAMESPACE);
        }
    }

    onSubmitWithArgument = additionalArgument => (values) => {
        // console.log('onSubmitWithArgument', values);
        return this.props.onSubmit(values, additionalArgument);
    };

    render() {
        const {handleSubmit, pristine, reset, submitting, pickFormData, pathName = null} = this.props;
        return (
            <div>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {/* <form onSubmit={(values, otherProps) => handleSubmit(onSubmit(values, otherProps))}> */}
                <form onSubmit={handleSubmit(this.onSubmitWithArgument(pathName))}>
                    <ManufacturersList formData={pickFormData} />
                    <FormWithBoxes
                        formData={pickFormData}
                        boxToggleHandler={toggleBoxesHandler}
                    />

                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: NAMESPACE,
    enableReinitialize: true,
    initialValues: formInitialValues
})(PickForm);
