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

class PickForm extends React.Component {
    componentDidMount() {
        const {autoFillData, pickGroupId, autofill, change, pathName, onSubmit} = this.props;

        const fData = {};
        change(PICK_FORM_GROUP_ID, pickGroupId);
        fData[PICK_FORM_GROUP_ID] = pickGroupId;
        fData[PICK_FORM_PAGE] = 1;

        let doSubmit = false;

        if (get(autoFillData, PICK_FORM_FILTERS)) {
            doSubmit = true;
            fData[PICK_FORM_FILTERS] = autoFillData[PICK_FORM_FILTERS];
            autofill(PICK_FORM_FILTERS, autoFillData[PICK_FORM_FILTERS]);
        }
        if (get(autoFillData, PICK_FORM_MANUFACTURERS)) {
            doSubmit = true;
            fData[PICK_FORM_MANUFACTURERS] = autoFillData[PICK_FORM_MANUFACTURERS];
            autofill(PICK_FORM_MANUFACTURERS, autoFillData[PICK_FORM_MANUFACTURERS]);
        }
        console.log('DS', doSubmit);
        console.log('fData', fData);

        if (doSubmit === true) {
            onSubmit(fData, pathName);
        }
    }

    onSubmitWithArgument = additionalArgument => (values) => {
        console.log('onSubmitWithArgument', values);
        return this.props.onSubmit(values, additionalArgument);
    };

    render() {
        const {handleSubmit, pristine, reset, submitting, pickFormData, pathName = null} = this.props;
        // console.log('handleSubmit R', handleSubmit);
        return (
            <div>
                <form
                    onSubmit={handleSubmit(this.onSubmitWithArgument(pathName))}
                >
                    <ManufacturersList formData={pickFormData} />
                    <FormWithBoxes
                        formData={pickFormData}
                        boxToggleHandler={toggleBoxesHandler}
                    />

                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: NAMESPACE,
    enableReinitialize: true
}, (state, ownProps) => ({
    initialValues: {
        first_name: ownProps.pickGroupId,
        page: 1
    }
}))(PickForm);
